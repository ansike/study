/**
 * 判断字符串是否是base64
 * @param {string} str 
 * 1. 字符串只能包含[A-Za-z0-9+/=]
 * 2. 字符串长度是4的倍数
 * 3. =只会出现在字符串最后，可能没有或者一个等号或者两个等号
 */
const isBase64 = (str) => {
    const reg = /^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/;
    return reg.test(str);
}

/**
 * 实现base64转成blob
 * @param {*} base64 
 * 步骤：
 * 1.取出加密内容部分，使用atob解码base64的字符串
 * 2.创建一个数组，存储字符串的ASCII值
 * 3.返回一个blob对象(new Blob(a, b) a为[数组], b为{type; ""})
 */
const imgBase64ToBlob = (base64) => {
    // 对base64操作，去掉URL头，转换为byte
    let splits = base64.split(',');
    const bytes = window.atob(splits[1]);

    // 第一种
    const ab = new ArrayBuffer(bytes.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], { type: splits[0].split(":")[1] });

    // 第二种
    // const ab = [];
    // for(var i = 0; i < bytes.length; i++){
    //     ab.push(bytes.charCodeAt(i));
    // }
    // return new Blob([new Uint8Array(ab)], { type: 'image/svg+xml' });
}

console.log(isBase64('axsa'));