/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-22 11:03:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 11:21:39
 * @Description:
 */
import type { Key } from 'react';
import React, { useEffect } from 'react';
import { Form, Select, InputNumber, Input, Switch, Radio } from 'antd';
import type { Store } from 'antd/lib/form/interface';
import Color from '../../components/FormComponents/Color';
import Upload from '../../components/FormComponents/Upload';
import CardPicker from '../../components/FormComponents/CardPicker';
import DataList from '../../components/FormComponents/DataList';
import RichText from '../../components/FormComponents/RichText';
import MultipleText from '../../components/FormComponents/MultipleText';

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    //待修改
    return e;
  }
  return e && e.fileList;
};
type FromEditorProps = {
  uid: string;
  onSave: Function;
  onDel: Function;
  defaultValue: { [key: string]: any };
  config: any[];
  defaultConfig: any;
  rightPannelRef: React.RefObject<HTMLDivElement>;
};
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const { Option } = Select;
const { TextArea } = Input;

const FromEditor = (props: FromEditorProps) => {
  const { config, defaultConfig = {}, defaultValue, onSave, uid, rightPannelRef } = props;
  const [form] = Form.useForm();
  // 当切换组件的时候清空表单
  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, [uid, form]);

  const onFinish = (values: Store) => {
    const _values = {
      ...defaultConfig,
      ...values,
    };
    onSave?.(_values);
  };
  // 表单值发生变化的时候直接调用onFinish
  const onValuesChange = () => {
    onFinish(form.getFieldsValue());
  };
  return (
    <Form
      form={form}
      name="form_editor"
      {...formItemLayout}
      initialValues={defaultValue}
      onValuesChange={onValuesChange}
      onFinish={onFinish}
    >
      {config.map((item, i) => {
        return (
          <React.Fragment key={i}>
            {item.type === 'Text' && (
              <Form.Item label={item.name} name={item.key}>
                <Input />
              </Form.Item>
            )}
            {item.type === 'MultipleText' && (
              <Form.Item label={item.name} name={item.key}>
                <MultipleText />
              </Form.Item>
            )}

            {item.type === 'Color' && (
              <Form.Item label={item.name} name={item.key}>
                <Color />
              </Form.Item>
            )}
            {item.type === 'Number' && (
              <Form.Item label={item.name} name={item.key}>
                <InputNumber max={item.range && item.range[1]} />
              </Form.Item>
            )}
            {item.type === 'Select' && (
              <Form.Item label={item.name} name={item.key}>
                <Select placeholder="请选择">
                  {item.range.map((v: any, i: Key) => {
                    return (
                      <Option value={v.key} key={i}>
                        {v.text}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            )}
            {item.type === 'TextArea' && (
              <Form.Item label={item.name} name={item.key}>
                <TextArea rows={4} />
              </Form.Item>
            )}
            {/* 这里的图片上传使用action方式(大图上传慢)，可使用ali-oss上传进行优化 */}
            {item.type === 'Upload' && (
              <Form.Item
                label={item.name}
                name={item.key}
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload cropRate={item.cropRate} isCrop={item.isCrop} />
              </Form.Item>
            )}
            {item.type === 'Switch' && (
              <Form.Item label={item.name} name={item.key} valuePropName="checked">
                <Switch />
              </Form.Item>
            )}
            {item.type === 'Radio' && (
              <Form.Item label={item.name} name={item.key}>
                <Radio.Group>
                  {item.range?.map((v: any, i: React.Key) => {
                    return (
                      <Radio value={v.key} key={i}>
                        {v.text}
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </Form.Item>
            )}
            {item.type === 'CardPicker' && (
              <Form.Item label={item.name} name={item.key} valuePropName="type">
                <CardPicker icons={item.icons} type={defaultValue.type} />
              </Form.Item>
            )}

            {item.type === 'DataList' && (
              <Form.Item label={item.name} name={item.key}>
                <DataList cropRate={item.cropRate} />
              </Form.Item>
            )}
            {item.type === 'RichText' && (
              <Form.Item label={item.name} name={item.key} noStyle={true}>
                <RichText />
              </Form.Item>
            )}
          </React.Fragment>
        );
      })}
    </Form>
  );
};
export default React.memo(FromEditor);
