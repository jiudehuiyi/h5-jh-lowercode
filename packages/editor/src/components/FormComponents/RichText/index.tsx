/* eslint-disable @typescript-eslint/no-unused-expressions */
/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-27 18:19:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 18:28:32
 * @Description:
 */

import React, { useState, useEffect } from 'react';
import styles from './index.less';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
const controls = [
  {
    key: 'bold',
    text: <b>加粗</b>,
  },
  'undo',
  'redo',
  'emoji',
  'list-ul',
  'list-ol',
  'blockquote',
  'text-align',
  'font-size',
  'line-height',
  'letter-spacing',
  'text-color',
  'italic',
  'underline',
  'link',
  'media',
];
const CustomerRichText = (props: any) => {
  const { value, onChange } = props;
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(value));
  const submitContent = () => {
    const htmlContent = editorState.toHTML();
    onChange && onChange(htmlContent);
  };

  const handleEditorChange = (editorState: any) => {
    setEditorState(editorState);
    if (onChange) {
      const htmlContent = editorState.toHTML();
      onChange(htmlContent);
    }
  };

  useEffect(() => {
    const htmlContent = value || '';
    setEditorState(BraftEditor.createEditorState(htmlContent));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mediaUploadFn = (param: any) => {
    const serverURL = `https://i.localhome.cn/api/upload/img`; //上传的路径
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    const successFn = (response: any) => {
      console.log(response, JSON.parse(xhr.responseText).url);
      // 假设服务端直接返回文件上传后的地址
      // // 上传成功后调用param.success并传入上传后的文件地址
      param.success({
        url: JSON.parse(xhr.responseText).url,
      });
    };
    const progressFn = (event: any) => {
      // 上传进度发生变化时调用param.progress
      param.progress((event.loaded / event.total) * 100);
    };
    const errorFn = () => {
      // 上传发生错误时调用param.error
      param.error({
        msg: 'unable to upload.',
      });
    };
    xhr.upload.addEventListener('progress', progressFn, false);
    xhr.addEventListener('load', successFn, false);
    xhr.addEventListener('error', errorFn, false);
    xhr.addEventListener('abort', errorFn, false);
    fd.append('file', param.file);
    xhr.open('POST', serverURL, true);
    xhr.send(fd);
  };

  return (
    <BraftEditor
      value={editorState}
      controls={controls}
      onChange={handleEditorChange}
      onSave={submitContent}
      media={{ uploadFn: mediaUploadFn }}
    />
  );
};

export default React.memo(CustomerRichText);
