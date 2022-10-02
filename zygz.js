//////////////////////////////////////////////
////////////自用规则合集//////////
/////////////////////////////////////////////

[mitm]

hostname= buy.itunes.apple.com,api.revenuecat.com,api.xiuxiu.meitu.com,account.wps.cn,notability.com,lcs-mobile-cops.adobe.io,api.sortedapp.com,license.pdfexpert.com,commerce-api.faceu.mobi,dict.youdao.com,top-widgets-api.xiaozujian.com,mp.weixin.qq.com,i.weread.qq.com,wallpaper.soutushenqi.com,ap*.intsig.net,subscription-api.notedapp.io,api.meiyan.com,service.ilovepdf.com,photos.adobe.io,*.kuwo.cn,*.lrts.me
info.json


[rewrite_local]

# /******************************
# 脚本功能：Picsew滚动截图+解锁订阅
# 软件版本：3.8.6
# *******************************

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Picsew.js

# /******************************
# 脚本功能：文件管理器+解锁订阅
# 软件版本：1.0.5
# *******************************

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wjglq.js

# /******************************
# 脚本功能：1blocker+解锁订阅
# 软件版本：5.2.5
# *******************************

^https:\/\/api\.revenuecat\.com\/v1\/subscribers url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/blocker.js

# /******************************
# 脚本：https抓包+解锁功能订阅
# 软件版本：v2.2.2
# *******************************

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/https.js

# /******************************
# 脚本功能：美图秀秀+解锁VIP
# 软件版本：v9.6.20
# *******************************

^https:\/\/api\.xiuxiu\.meitu\.com\/v1 url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mtxx.js

# /******************************
# 脚本功能：XMind思维导图+解锁订阅
# 软件版本：3.2.10
# *******************************

^https:\/\/www\.xmind\.cn\/_res\/devices url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xmind.js

# /******************************
# 脚本功能：WPS Office+解锁VIP
# 软件版本：11.26.0
# *******************************

^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wps.js

# /******************************
# 脚本功能：酷我音乐+解锁VIP【广告➕VIP➕数字➕下载】
# 软件版本：10.3.3
# *******************************

^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kwyy.js

# /******************************
# 脚本功能：Lr Adobe Lightroom+解锁订阅
# 软件版本：7.5.2
# *******************************

^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lightroom.js

# /******************************
# 脚本功能：LovepDF-PDF+解锁订阅
# 软件版本：3.1.9
# *******************************

https://service.ilovepdf.com/v1/user url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lovePdf.js

# /******************************
# 脚本功能：目标地图+解锁订阅
# 软件版本：2.21.3
# *******************************

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mbdt.js

# /******************************
# 脚本功能：美颜相机+解锁VIP
# 软件版本：11.1.00
# *******************************

^https:\/\/api\.meiyan\.com\/vip\/user_info\.json url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/myxj.js

# /******************************
# 脚本功能：Noted-录音笔记+解锁订阅
# 软件版本：3.6.10
# *******************************

^https:\/\/subscription-api\.notedapp\.io\/api\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/noteb.js

# /******************************
# 脚本功能：Panda Widget+解锁订阅
# 软件版本：2.1.0
# *******************************

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/pandavip.js

# /******************************
# 脚本功能：扫描全能王-手机扫描仪+解锁VIP
# 软件版本：6.24.5
# *******************************

^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/smqnw.js

# /******************************
# 脚本功能：搜图神器+解锁VIP
# 软件版本：v1.2.7
# *******************************

http:\/\/wallpaper\.soutushenqi\.com\/api\/v1\/account url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/stsq.js

# /******************************
# 脚本功能：微信读书+解锁无限卡会员
# 软件版本：7.0.0
# *******************************

^https:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/txwxds.js

# /******************************
# 脚本功能：微信自动阅读+薅羊毛
# *******************************

^https?://mp\.weixin\.qq\.com/s\?.* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wechat.js

# /******************************
# 脚本功能：Widgetsmith+解锁订阅
# 软件版本：4.0.4
# *******************************

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/widgetSmith.js

# /******************************
# 脚本功能：TopWidgets-小组件+解锁订阅
# 软件版本：3.7.6
# *******************************

^https:\/\/top-widgets-api\.xiaozujian\.com\/api\/app\/config\/userConfig url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/widgets.js

# /******************************
# 脚本功能：网易有道词典+解锁VIP
# 软件版本：9.2.27
# *******************************

^https:\/\/dict\.youdao\.com\/vip\/user\/status url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wyydcd.js

# /******************************
# 脚本功能：醒图+解锁VIP
# 使用教程：爱思助手下载5.5版本
# 软件版本：5.5.0
# *******************************

^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xt.js

# /******************************
# 脚本功能：熊掌记- Markdown+解锁订阅
# 软件版本：1.9.7
# *******************************

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xzj.js

# /******************************
# 脚本功能：fileball+解锁订阅
# 下载地址：美区
# 软件版本：1.2.5
# *******************************

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/fileball.js

# /******************************
# 脚本功能：documents文件管理器+解锁订阅
# 软件版本：v8.2.3
# *******************************

^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/refresh url script-request-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/documents.js

# /******************************
# 脚本功能：Scanner Pro+解锁订阅
# 软件版本：8.10

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Scanner.js

# /******************************
# 脚本功能：Sorteds - 日历+解锁订阅
# 软件版本：3.9.1
# *******************************

^https:\/\/api\.sortedapp\.com\/receipts\/verify url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Sorted.js

# /******************************
# 脚本功能：Photoshop Express +解锁高级用户
# 软件版本：22.35.0
# *******************************

^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Photoshop.js

# /******************************
# 脚本功能：Notability +解锁订阅
# 软件版本：11.6.2
# *******************************

^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Notability.js

# /******************************
# 脚本功能：PDF—Expert点睛+解锁订阅
# 软件版本：v7.11.0
# *******************************

^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/pdfexpert6\/subscription\/refresh url script-request-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/PDFExpert.js

# /******************************
# 脚本功能：Colorful—Widget+解锁订阅
# 软件版本：5.7.3
# *******************************

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ColorfulWidget.js
