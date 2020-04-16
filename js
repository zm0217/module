#!name=签到脚本模块——自用
#!desc=结合“签到脚本get cookie”使用
#!system=ios

[Script]
> jddj = type=cron,cronexp=cron "10 0 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/jddj/jddj.js,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/jddj/jddj.js,script-update-interval=0

> WeChatLottery = type=cron,cronexp=cron "7 0 * * *" script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/WeChatLottery/WeChatLottery_new.js,script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/WeChatLottery/WeChatLottery_new.js,script-update-interval=0

> 10010-check_in = type=cron,cronexp=cron "8 0 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.js,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.js,script-update-interval=0

> elm-check_in = type=cron,cronexp=cron "5 0 * * *" script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/elemSign.js,script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/elemSign.js,script-update-interval=0

> ximalaya-check_in = type=cron,cronexp=cron "6 0 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.js,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.js,script-update-interval=0

> renren-check_in = type=cron,cronexp=cron "6 0 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/rrtv/rrtv.js,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/rrtv/rrtv.js,script-update-interval=0

> bilibili-check_in = type=cron,cronexp=cron "9 0 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.js,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.js,script-update-interval=0

> JD_DailyBonus = type=cron,cronexp=cron "1 0 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js,script-update-interval=0
