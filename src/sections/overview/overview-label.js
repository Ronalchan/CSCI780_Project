import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Select,
  MenuItem,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const datasets = {
  'ISCXVPN': [
    {
      task: 'VPN Detection',
      labels: ['VPN', 'nonVPN'],
    },
    {
      task: 'VPN Service Detection',
      labels: ['P2P', 'Streaming', 'Email', 'Chat', 'VoIP', 'FileTransfer'],
    },
    {
      task: 'VPN Application Classification',
      labels: [
        'Tor', 'Torrent', 'Spotify', 'Youtube', 'Netflix', 'Vimeo', 'Email',
        'Gmail', 'ICQ', 'Skype', 'Hangouts', 'AIM', 'Facebook', 'VoIPBuster',
        'FTPS', 'SCP', 'SFTP',
      ],
    },
  ],
  'ISCXTor': [
    {
      task: 'Tor Detection',
      labels: ['Tor', 'nonTor'],
    },
    {
      task: 'Tor Service Detection',
      labels: ["Streaming", "Browsing", "Email", "Chat", "TraP2P", "VoIP", "FileTransfer"],
    },
  ],
  'USTC-TFC': [
    {
      task: 'Malware Detection',
      labels: ['Benign', 'Malware'],
    },
    {
      task: 'Application Classification',
      labels: ["WorldOfWarcraft", "SMB", "Weibo", "FTP", "MySQL", "Gmail", "Neris", "Htbot", "Cridex", "Nsis-ay", "Shifu", "Zeus", "Miuref", "Geodo", "Virut", "Tinba"],
    },
  ],
  'Cross Platform (Android)': [
    {
      task: 'Application Classification',
      labels: [
        'com.winit.starnews.hin', 'com.pinterest', 'com.ubercab.eats', 'com.msm.lhmsappolice', 'com.shopclues', 'com.gaana', 'com.lenovo.anyshare.gps', 'in.AajTak.headlines', 'com.outfit7.talkingtom', 'com.bsbportal.music', 'com.hangoverstudios.vehicleinfo', 'com.narendramodiapp', 'com.newsdog', 'easypedeometer.herzberg.com.stepcounter', 'com.snapdeal.main', 'com.amazon.kindle', 'com.toi.reader.activities', 'dev.gautam.bbkiwines', 'com.akosha.directtalk', 'com.application.zomato', 'tv.peel.app', 'com.fitbit.FitbitMobile', 'org.khanacademy.android', 'com.Splitwise.SplitwiseMobile', 'com.flipkart.android', 'com.carwale', 'com.opera.mini.native', 'com.dccomics.comics', 'com.houzz.app', 'com.okcupid.okcupid', 'com.shopping.limeroad', 'com.yoga.pro.google.paid', 'com.byjus.thelearningapp', 'com.palabs.artboard', 'com.poker.clubs.wallpapers.cute.anime.girl', 'naukriApp.appModules.login', 'com.cuvora.carinfo', 'com.healthifyme.basic', 'com.alibaba.aliexpresshd', 'net.cybrook.trackview', 'com.done.faasos', 'in.amazon.mShop.android.shopping', 'com.zalebox.room.painting.ideas.s1', 'com.jabong.android', 'com.girnarsoft.cardekho', 'com.paytmmall', 'com.olx.southasia', 'com.aranoah.healthkart.plus', 'com.practo.fabric', 'com.fitness.center.seven.minute.workout', 'com.uc.browser.en', 'com.india.foodpanda.android', 'com.tekoia.sure.activities', 'com.lumoslabs.lumosity', 'com.imo.android.imoim', 'com.bt.bms', 'pl.planmieszkania.android', 'com.voiceMap.navigationTracker', 'club.fromfactory', 'HinKhoj.Dictionary', 'com.trackview', 'com.tilzmatictech.mobile.navigation.delhimetronavigator', 'sh.whisper', 'com.appsilo.paheli', 'com.Dominos', 'com.sharper.yoga', 'in.lucidify.remindme', 'com.timesgroup.magicbricks', 'com.tencent.tmgp.huluwa', 'com.thestore.main', 'tv.danmaku.bili', 'com.mfw.roadbook', 'com.tencent.qqlive', 'ctrip.android.view', 'com.itings.myradio', 'com.renren.mobile.android', 'com.ifeng.fhdt', 'com.qidian.QDReader', 'com.esbook.reader', 'com.qq.reader', 'com.tencent.reading', 'com.xunlei.downloadprovider', 'com.happyelements.AndroidClover.www', 'com.qiyi.video', 'com.UCMobile', 'com.outfit7.mytalkinghank', 'com.baidu.BaiduMap', 'com.jifen.qukan', 'com.letv.android.client', 'com.sina.news', 'com.hzfb.racing8.tx', 'com.sina.weibo', 'com.happyelements.AndroidAnimal.qq', 'com.tencent.radio', 'com.youdao.dict', 'com.shoujiduoduo.ringtone', 'com.coomix.app.bus', 'com.aikan', 'me.ht.local.hot', 'com.fenbi.android.solar', 'com.dianping.v1', 'com.szzc.ucar.pilot', 'com.ss.android.article.news', 'com.mt.mtxx.mtxx', 'com.baidu.wenku', 'com.culiu.qqpurchase', 'com.Qunar', 'com.ophone.reader.ui', 'sina.mobile.tianqitong', 'com.dewmobile.kuaiya', 'com.qzone', 'com.baidu.homework', 'com.tuniu.app.ui', 'com.tencent.tmgp.yqqskp', 'com.zoneyet.gaga', 'com.moji.mjweather', 'com.iooly.android.lockscreen', 'com.zhejiangdaily', 'com.lazyswipe', 'com.lanjingren.ivwen', 'com.netease.newsreader.activity', 'fm.xiami.main', 'com.hunantv.imgo.activity', 'com.immomo.momo', 'bubei.tingshu', 'com.ximalaya.ting.android', 'com.xiachufang', 'com.tongcheng.android', 'com.duowan.mobile', 'com.ifeng.news2', 'com.tiexue.mobile.topnews', 'com.kuaikan.comic', 'com.duowan.kiwi', 'com.changba', 'com.autonavi.minimap', 'com.tencent.mobileqq', 'com.shuqi.controller', 'com.tencent.qqmusic', 'com.sohu.sohuvideo', 'fm.qingting.qtradio', 'com.tencent.mtt', 'com.ushaqi.zhuishushenqi', 'com.zhihu.android', 'com.ygkj.chelaile.standard', 'com.ea.simcitymobile.tx', 'com.duomi.android', 'com.book2345.reader', 'com.handsgo.jiakao.android', 'com.youku.phone', 'com.qihoo.video', 'com.sdu.didi.psnger', 'com.tieyou.train.ark', 'im.yixin', 'cn.cntvnews', 'com.tencent.news', 'com.iflytek.inputmethod', 'com.abtnprojects.ambatana', 'com.smartkeyboard.emoji', 'com.google.android.apps.tachyon', 'com.adpmobile.android', 'com.iconology.comics', 'com.sephora', 'com.tool.power', 'com.wSugarMommasDating_4791482', 'com.babycenter.pregnancytracker', 'co.happybits.marcopolo', 'net.zedge.android', 'com.goodrx', 'com.reddit.frontpage', 'com.jardogs.fmhmobile', 'com.zillow.android.zillowmap', 'com.indeed.android.jobsearch', 'com.autopten.cheapcarsforsale', 'com.powertools.booster', 'com.amazon.tahoe', 'com.carmax.carmax', 'com.zoosk.zoosk', 'com.jb.go.musicplayer.mp3player', 'com.spotify.music', 'com.xpro.camera.lite', 'appinventor.ai_reflectiveapps.rbxlook', 'fakevideocall.jojo.siwacall', 'tv.telepathic.hooked', 'com.foxsports.videogo', 'com.trulia.android', 'com.colorjoy.learn.to.draw.glow.comics', 'com.match.android.matchmobile', 'com.naver.linewebtoon', 'com.carezone.caredroid.careapp.medications', 'com.google.android.apps.primer', 'com.audible.application', 'com.seven.fitness.workout', 'fm.castbox.audiobook.radio.podcast', 'com.ss.android.article.master', 'dating.app.chat.flirt.wgbcv', 'com.particlenews.newsbreak', 'com.steam.photoeditor', 'fakevideocall.chase.pawpatrol', 'com.espn.score_center', 'com.pandora.android', 'com.jiubang.fastestflashlight', 'com.jiubang.go.music', 'br.com.escolhatecnologia.vozdonarrador', 'com.ulta', 'com.google.samples.apps.cardboarddemo', 'com.contextlogic.wish', 'com.colorjoy.Learn.to.draw.glow.c', 'bibleverses.bibleverse.bible.biblia.verse.devotion'
        ],        
    },
    {
      task: 'Country Detection',
      labels: ["India", "US", "China"],
    },
  ],
  'Cross Platform (iOS)': [
    {
      task: 'Application Classification',
      labels: [
        'practo-your-home-for-health', 'my-talking-tom', 'amazon', 'ubereats-food-delivery-fast', 'voice-changer-creator-and-player', 'oxford-english-dictionary-2017', 'hotstar', 'jetpack-joyride', 'goibibo', 'xender-file-transfer-sharing', 'dailyhunt-formerly-newshunt', 'my-airtel-recharge-pay-bill-payments-bank', 'duolingo-learn-spanish-french-and-more', 'saavn-music-radio', 'khan-academy-you-can-learn-anything', 'the-times-of-india', 'google-drive-secure-online-file-storage', 'navmii-gps-india-offline-navigation', 'filmfare-magazine', 'olx-buy-sell-near-you', 'uc-browser-fast-browsing-powerful-ad-block', 'wikipedia', 'tinder', 'medscape', 'club-factory-fair-price', 'delhi-ncr-metro', 'picsart-photo-studio-collage-maker-pic-editor', 'nike-run-club', 'scribd-reading-subscription', 'google-maps-navigation-transport', 'speedtest-by-ookla', '8-ball-pool', 'photable-photo-editor-collage-maker', 'shareit-connect-transfer', 'weather-live-weather-forecast-temperature', 'netmeds-india-ki-pharmacy', 'voot-tv-shows-movies-cartoons', 'paytm-payments-wallet-recharges', 'dream11-fantasy-sports-cricket-kabaddi-football', 'like-magic-music-video-maker', 'vivavideo-video-editor-photo-movie-maker', 'forbes-india', 'wynk-music-hindi-and-english-songs', 'dubsmash', 'happn-dating-app-find-and-meet-your-crush', 'shein-shopping-womens-clothing-fashion', 'indian-railway-irctc-pnr-status', 'google-translate', 'waze-navigation-live-traffic', 'yahoo-weather', 'weather-radar', 'oyo-hotel-booking-app', 'cricbuzz-live-cricket-scores-news', 'tuunes-ringtones-music-text-tones-for-iphone', 'autocar-india-mag', 'sarahah', 'beautyplus-selfie-camera-for-a-beautiful-image', 'makemytrip-flights-hotels-buses', 'hike-messenger', 'accuweather-weather-for-life', 'sing-karaoke-by-smule', 'subway-surfers', 'narendra-modi', 'truecaller-spam-identification-block', 'pinterest', 'musical-ly-your-video-social-network', 'Snapchat', 'fitness-for-weight-loss-personalized-workout-plan', 'espncricinfo-cricket', 'google-duo-simple-video-calling', 'hungama-music-songs-radio-videos', 'bcci', 'byjus-the-learning-app', 'secret-apps-the-secret-locker-for-photo-video', 'gmail-email-by-google-secure-fast-organised', 'dictionary-com-dictionary-thesaurus', 'dictionary', 'app-locker-app-lock-hide-safe-with-fingerprint', 'ndtv', 'kindle-read-ebooks-magazines-textbooks', 'camscanner', 'mx-video-player-hd-video-player-for-iphone-ipad', 'pharmeasy-healthcare-app', '1mg', 'ludo-king', 'jabong-online-shopping-for-fashion', 'ola-cabs-book-a-taxi-with-one-touch', 'leps-world-free-platformer-games', 'swiggy-food-order-delivery', 'india-today', 'gps-navigation-be-on-road', 'hindi-dictionary-english-hindi-translator', 'jianyujiayuan', 'menghuanjiayuan', 'zhihu', 'qiuqiudazuozhanbob', 'tiantianaixiaochu', 'baicizhan', 'meiyanxiangji', 'baidutieba', 'tengxunshipin', 'wangzherongyao', 'meipian', 'aiqiyi', 'youku', 'aibajiaoyou', 'yy', 'b612kaji', 'qqkongjian', 'sougoushurufa', 'weibo', 'kuaishou', 'qq', 'dataoshajuedichiji', 'tanchishedazuozhan', 'momomomo', '58tongcheng', 'kaixinxiaoxiaole', 'renren', 'tiantiankupao', 'jiezoudashi', 'baidulvyou', 'google-play-books', 'zillow-real-estate-rentals', 'ebay-buy-sell-save-money', 'fire-rides', 'tbh', 'google-photos', 'wish-shopping-made-fun', 'myfitnesspal', 'dancing-line', 'starbucks', 'pandora-music', 'yelp-discover-local-favorites', 'dominos-pizza-usa', 'perfect365', 'goodrx-save-on-prescriptions', 'espn-live-sports-scores', 'Buzzfeed', 'layout-from-instagram', 'soundcloud-music-audio', 'google-maps-gps-navigation', 'myradar-weather-radar', 'groupon', 'snake-vs-block', 'yarn-chat-text-stories', 'opentable', 'flashlight', 'national-geographic-magazine', 'rolly-vortex', 'cnn-breaking-us-world-news', 'walmart-shopping-and-saving', 'ted', 'lose-it-calorie-counter', 'puzzledom', 'dune', 'amazon-prime-video', 'followmyhealth', 'fitbit', 'youtube-watch-listen-stream', 'secret-apps-the-locker', 'spotify-music', 'photomath-camera-calculator', 'amc', 'peak-brain-training', 'live-wallpapers-and-themes-now', 'the-wall-street-journal', 'bbc-news', 'bitmoji', 'trivia-crack', 'the-new-york-times', 'usa-today', 'epocrates-medical-references', 'mcdonalds', 'hotspotshield-vpn-wifi-proxy', 'color-ballz', 'mychart', 'gmail-email-by-google', 'people-magazine', 'flipagram', 'fox-news-live-breaking-news', 'grubhub-food-delivery-takeout', 'amazon-shopping-made-easy', 'google-drive', 'scanner-app-pdf-document-scan', 'newsroom-news-worth-sharing', 'bible', 'google-chrome', 'nfl', 'text-free-texting-app-sms', 'pocket-pool', 'paypal-send-receive-money', 'google-docs', 'colorfy-coloring-book', 'letgo-buy-sell-secondhand', 'google'
        ],
    },
    {
      task: 'Country Detection',
      labels: ["India", "US", "China"],
    },
  ],
  'CIRA-CIC-DoHBrw': [
    {
      task: 'DoH Attack Detection',
      labels: ['Benign', 'Malicious'],
    },
    {
      task: 'DoH Query Method Classification',
      labels: ['Chrome', 'Firefox', 'DNSCat2', 'dns2tcp', 'Iodine'],
    },
  ],
  'CIC IoT Dataset': [
    {
      task: 'IoT Attack Detection',
      labels: ['Benign', 'Malicious'],
    },
    {
      task: 'IoT Attack Method Detection',
      labels: ['Recon', 'DoS', 'BruteForce', 'Mirai', 'Web-based', 'DDoS', 'Spoofing'],
    },
  ],
};

export const OverviewLabel = (props) => {
  const { sx, dataset, setDataset } = props;
  
  const data = datasets[dataset];

  return (
    <Card>
      <CardHeader
        title="Task Labels"
        action={
          <Select
            value={dataset}
            onChange={(e) => setDataset(e.target.value)}
          >
            {Object.keys(datasets).map(key => (
              <MenuItem value={key} key={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        }
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table aria-label="task labels table">
            <TableHead>
              <TableRow>
                <TableCell>Task</TableCell>
                <TableCell style={{ minWidth: 250 }}>Labels</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.task}</TableCell>
                  <TableCell>
                    <Typography>
                      {item.labels.join(', ')}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

OverviewLabel.propTypes = {
  sx: PropTypes.object,
  dataset: PropTypes.string.isRequired,
  setDataset: PropTypes.func.isRequired,
};
