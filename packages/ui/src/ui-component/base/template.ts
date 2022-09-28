/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-19 11:17:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 16:42:31
 * @Description:
 */
import Text from './Text/template';
import LongText from './LongText/template';
import Title from './Title/template';
import Button from './Button/template';
import Image from './Image/template';
import Icon from './Icon/template';
import Carousel from './Carousel/template';
import Notice from './Notice/template';
import RichText from './RichText/template';
import Blank from './Blank/template';
import QrCode from './QrCode/template';
import Tabs from './Tabs/template';
import Shape from './Shape/template';
import Form from './Form/template';
const basicTemplate: any[] = [
  Text,
  LongText,
  Title,
  Button,
  Image,
  Icon,
  Carousel,
  Notice,
  RichText,
  Blank,
  QrCode,
  Tabs,
  Shape,
  Form,
];
const BasicTemplate = basicTemplate.map((template) => {
  return {
    ...template,
    category: 'base',
  };
});
export default BasicTemplate;
