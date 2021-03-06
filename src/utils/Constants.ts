/*! @file
********************************************************************************
<PRE>
文件实现功能   : 基础平台常量的定义 
作者           : dotdancer
版本           : 1.0
--------------------------------------------------------------------------------
备注           : -
--------------------------------------------------------------------------------
修改记录 :
日  期       版本    修改人     修改内容
2022/04/16   1.0     dotdancer  创建 
</PRE>
*******************************************************************************/
export const LOGIN_PATH = '/login' // 登录路径
export const EMAIL_PATTERN = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ // 邮箱验证正则
export const MOBILE_PATTERN = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/ // 手机号验证正则
export const ICON_TYPE = {ADD: 'add', EDIT: 'edit', REMOVE: 'remove'}