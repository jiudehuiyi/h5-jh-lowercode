/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-28 16:25:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 16:36:43
 * @Description:
 */
import React, { useCallback } from 'react';
import { Button } from 'zarm';
import styles from './index.less';
import FormLogo from '@/assets/form.png';
import BaseForm from './BaseForm';

const FormComponent = (props: any) => {
  const {
    title,
    bgColor,
    fontSize,
    titColor,
    btnColor,
    titWeight,
    btnTextColor,
    api,
    formControls,
    isTpl,
  } = props;
  const formData: Record<string, any> = {};
  const handleChange = useCallback(
    (item, v) => {
      formData[item.label] = v;
    },
    [formData],
  );
  const handleSubmit = () => {
    // 这里对表单进行提交
    if (api) {
      fetch(api, {
        body: JSON.stringify(formData),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
      });
    }
  };
  if (isTpl) {
    return (
      <div>
        <img src={FormLogo} alt="" style={{ width: '100%' }} />
      </div>
    );
  }
  const isEditorPage = window.location.pathname.indexOf('editor') > -1;

  return (
    <div
      className={styles.formWrap}
      style={{
        backgroundColor: bgColor,
        overflow: 'hidden',
        position: 'absolute',
        pointerEvents: isEditorPage ? 'none' : 'initial',
      }}
    >
      {title && (
        <div className={styles.title} style={{ fontSize, fontWeight: +titWeight, color: titColor }}>
          {title}
        </div>
      )}
      <div className={styles.formContent}>
        {formControls.map((item: any) => {
          const FormItem = BaseForm[item.type];
          return (
            <FormItem onChange={(v: string) => handleChange(item, v)} {...item} key={item.id} />
          );
        })}
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <Button
            theme="primary"
            size="sm"
            block
            onClick={handleSubmit}
            style={{ backgroundColor: btnColor, borderColor: btnColor, color: btnTextColor }}
          >
            提交
          </Button>
        </div>
      </div>
    </div>
  );
};
export default React.memo(FormComponent);
