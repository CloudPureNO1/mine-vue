const FileSaver = require('file-saver');
const mime = require('mime');

// 请求下载文件
const download = (method, url, params, cus_filname) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
      resolve();
      if (this.status === 200) {
        let filename = '';
        const disposition = xhr.getResponseHeader('Content-Disposition');
        if (disposition && disposition.indexOf('attachment') !== -1) {
          const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const matches = filenameRegex.exec(disposition);
          if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
        }
        const type = xhr.getResponseHeader('Content-Type');

        const blob = new Blob([this.response], {type: type});
        FileSaver.saveAs(blob, cus_filname || filename || `下载文件.${mime.getExtension(type)}`);
      }
    };
    xhr.onerror = function() {
      reject();
    };
    xhr.setRequestHeader('Content-type', 'application/json');
    if (params) {
      xhr.send(params);
    } else {
      xhr.send();
    }
  });
};

export default download;