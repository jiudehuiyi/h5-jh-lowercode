/*
 * @Author: jiudehuiyi
 * @Date: 2022-09-26 18:11:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-26 18:27:29
 * @Description:
 */
import { useState, useEffect, memo } from 'react';
import classnames from 'classnames';
import Icon from '@/components/Icon';
import styles from './index.less';
import React from 'react';
import type { ICardPickerConfigType } from '../types';

export type IconTypes =
  | 'AccountBookTwoTone'
  | 'AlertTwoTone'
  | 'ApiTwoTone'
  | 'AppstoreTwoTone'
  | 'AudioTwoTone'
  | 'BankTwoTone'
  | 'BellTwoTone'
  | 'BookTwoTone'
  | 'BugTwoTone'
  | 'BuildTwoTone'
  | 'BulbTwoTone'
  | 'CalculatorTwoTone'
  | 'CalendarTwoTone'
  | 'CameraTwoTone'
  | 'CarTwoTone'
  | 'CarryOutTwoTone'
  | 'CiCircleTwoTone'
  | 'CloudTwoTone'
  | 'CodeTwoTone'
  | 'CrownTwoTone'
  | 'CustomerServiceTwoTone'
  | 'DollarCircleTwoTone'
  | 'EnvironmentTwoTone'
  | 'ExperimentTwoTone'
  | 'FireTwoTone'
  | 'GiftTwoTone'
  | 'InsuranceTwoTone'
  | 'LikeTwoTone'
  | 'LockTwoTone'
  | 'MailTwoTone'
  | 'MessageTwoTone'
  | 'PhoneTwoTone'
  | 'PictureTwoTone'
  | 'PlaySquareTwoTone'
  | 'RedEnvelopeTwoTone'
  | 'ShopTwoTone'
  | 'TrademarkCircleTwoTone'
  | 'StarTwoTone'
  | 'SafetyCertificateTwoTone'
  | 'SettingTwoTone'
  | 'RocketTwoTone';

interface CardPickerType extends Omit<ICardPickerConfigType<IconTypes>, 'type' | 'key' | 'name'> {
  onChange?: (v: string) => void;
  type: IconTypes;
}

const CardPicker = (props: CardPickerType) => {
  const { type, icons, onChange } = props;
  const [selected, setSelected] = useState<IconTypes>(type);
  const handlePicker = (v: IconTypes) => {
    if (onChange) {
      onChange(v);
      return;
    }
    setSelected(v);
  };

  useEffect(() => {
    setSelected(type);
  }, [type]);
  return (
    <div className={styles.pickerWrap}>
      {icons?.map((item, i) => {
        return (
          <span
            className={classnames(styles.picker, selected === item ? styles.selected : '')}
            onClick={() => handlePicker(item)}
            key={i}
          >
            <Icon
              type={item}
              size={20}
              color={'rgba(40,64,128,1)'}
              spin={false}
              text={''}
              fontSize={0}
              fontColor={''}
              link={''}
            />
          </span>
        );
      })}
    </div>
  );
};
export default memo(CardPicker);
