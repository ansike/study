function Compile(el, vm) {
  this.vm = vm;
  this.el = document.querySelector(el);
  this.fragment = null;
  this.init();
}

Compile.prototype = {
  init: function () {
    if (this.el) {
      //为什么要先放入fragment中，多此一举？
      //是为了后续的所有操作直接在js中执行，避免频繁操作dom引起性能问题。
      this.fragment = this.nodeToFragment(this.el);
      //处理所有的文本对象，指令
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
    } else {
      throw new Error('[selfVue error] 没有根结点！')
      console.log('Dom元素不存在');
    }
  },
  nodeToFragment: function (el) {
    var fragment = document.createDocumentFragment();
    var child = el.firstChild;
    //-----------------------------------------------------------------不理解为什么会水平遍历
    //appendChild会当前元素从原位置移动到当前位置，所以此处能实现横向遍历！！！
    while (child) {
      // 将Dom元素移入fragment中
      fragment.appendChild(child);
      child = el.firstChild
    }
    return fragment;
  },
  compileElement: function (el) {
    var childNodes = el.childNodes;
    var self = this;
    [].slice.call(childNodes).forEach(function (node) {
      var reg = /\{\{(.*)\}\}/;
      var text = node.textContent;

      if (self.isElementNode(node)) {
        self.compile(node);
      } else if (self.isTextNode(node) && reg.test(text)) {
        self.compileText(node, reg.exec(text)[1]); //reg.exec(text)[1]取到{{}}中的值
      }

      if (node.childNodes && node.childNodes.length) {
        self.compileElement(node);
      }
    });
  },
  compile: function (node) {
    var nodeAttrs = node.attributes;
    var self = this;
    Array.prototype.forEach.call(nodeAttrs, function (attr) {
      var attrName = attr.name;
      if (self.isDirective(attrName)) {
        var exp = attr.value;
        var dir = attrName.substring(2);
        if (self.isEventDirective(dir)) { // 事件指令
          self.compileEvent(node, self.vm, exp, dir);
        } else { // v-model 指令
          self.compileModel(node, self.vm, exp, dir);
        }
        node.removeAttribute(attrName);
      }
    });
  },
  compileText: function (node, exp) {
    var self = this;
    var initText = this.vm[exp];
    this.updateText(node, initText);
    new Watcher(this.vm, exp, function (value) {
      self.updateText(node, value);
    });
  },
  compileEvent: function (node, vm, exp, dir) {
    var eventType = dir.split(':')[1];
    var cb = vm.methods && vm.methods[exp];

    if (eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false);
    }
  },
  compileModel: function (node, vm, exp, dir) {
    var self = this;
    var val = this.vm[exp];
    this.modelUpdater(node, val);
    new Watcher(this.vm, exp, function (value) {
      self.modelUpdater(node, value);
    });

    node.addEventListener('input', function (e) {
      var newValue = e.target.value;
      if (val === newValue) {
        return;
      }
      self.vm[exp] = newValue;
      val = newValue;
    });
  },
  updateText: function (node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value;
  },
  modelUpdater: function (node, value, oldValue) {
    node.value = typeof value == 'undefined' ? '' : value;
  },
  isDirective: function (attr) {
    return attr.indexOf('v-') == 0;
  },
  isEventDirective: function (dir) {
    return dir.indexOf('on:') === 0;
  },
  isElementNode: function (node) {
    return node.nodeType == 1;
  },
  isTextNode: function (node) {
    return node.nodeType == 3;
  }
}