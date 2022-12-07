"use strict";
const config_DeveloperBMS = {
  channelAccessToken:
    "TuczeIljDooM403XLhebompJPgrCmCV/2AAl0Kz13GE1RowdBKPbxD1nZTyCDo626CZscXTCjbkgMfiZSYEJjnEN1H+KiQV6QtdMogVtKWHKPgmwrD7ZTbkEiBB4Z+2i+TvPC3S5dbxJBeHh9TqsQAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "d9b554af06701262c6fc5cec8242c36f",
};

const config_HOSxP_Official = {
  channelAccessToken:
    "l1YlVprn8VjGzL89uJnl6LpkE1OVyGSOdyraIdxtk2uy3Z1xALgXaCrlgMt98XUPrL8H3H7xrqqJq8tn++oR41SYoWJFyoKcP3tljS4ug8ZBgtrZ26skbgl4OPc6VxJNPhpoodFqyGxJE9DaO1LLtAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "8911ce962c80d2c5f6bdd7bed903e641",
};

const config_CPH_HOSP1 = {
  // 1.IPD(CPH_HOSP) โรงพยาบาลชุมพรเขตรอุดมศักดิ์
  channelAccessToken:
    "f5is8zpOC0IdYDRgM3ruMZba9VmIUhPRzYpwktqhp4GhwNm0yPYoTPfV53tqu5VSUbdKbDA0bRBsSgjBP2cN9vw/S0+py+gBrbZS+gIaA1xJPopYWloO5Q95g+YYXYWGkqpjbq8iqcBg3B/xMOxAsQdB04t89/1O/w1cDnyilFU=",
  channelSecret: "b26b5db0d7599aca176e23d026fb3fea",
};

const config_bcph2 = {
  //2.BMS Connect โรงพยาบาลบ้านดุง จ.อุดรธานี
  channelAccessToken:
    "1I6l+OE9LTGmwP/dwTd0mJ5tWuk2WQcndleuwI/OhomhJVKV6sRguaU4s/uMnpO5T4oVS612zqu0sZ8tFdbiAF1XnA0fCvhyIGk6mz+GT68ebeMSWgoqt/5CuGrWs+JJTJlKidVhJgiV6FYrRugMdgdB04t89/1O/w1cDnyilFU=",
  channelSecret: "980f433727a3de074b11639213bd8b91",
};

const config_SRN_Hosp3 = {
  //3.IPD(SRN_Hosp) โรงพยาบาลศรีรัตนะ จังหวัดศรีษะเกษ
  channelAccessToken:
    "FjFKAonGIV+9BwTFqbH0zFAWE9hdWR8XFr2wEwuc4+ROvwyMM5dwKpeO1Y8W6iJlN4OaFYLlOyZ6m4kwxHjJmUCjJdi49wawgDMYc2qF91dDhKaSpahiUiLbZjAl8ECAPbOWj4bhFJZsMQ/WsCbYDwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "58a158e3ac77643f75adaeb16bb26f9b",
};

const config_WNY4 = {
  //4.IPD Paperless WNY โรงพยาบาลวังน้ำเย็น จังหวัดสระแก้ว
  channelAccessToken:
    "O1RawjIJKoBavmpyTFAkxMngJHGMJPo45hN+7W9WkYDacwXtVj0as4uxRjlORspCkGLjnaZOSQ7TrUN8QkyEcCLZwNEAHjC3+pcFTmh8o+eg/Nmh0KfBgFvr7xX8RvO1NINoDkS3SAxddnUBph5bvwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "6e8a1335147e8000650433ad871319e7",
};

const config_NtvHos5 = {
  //5.NtvHos-Paperless โรงพยาบาลนาทวี (โรงพยาบาลสมเด็จพระบรมราชินีนาถ ณ อำเภอนาทวี สงขลา)
  channelAccessToken:
    "DOY/0LmPeByaXeMDP3RHSprO9dmt2U10pSsNgf1QXCN8ItB9PPcr3EWyCIzdxL2W6H0O1jnCdMKw4JkJr6DkpPV5rOxQ1zifYbnNOpL8pk2TWK8JYjUJM+Iy2+Xxc1qQ7dW4nYGk+P9Ut05YxGROyAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "0553bdf59ef07b804bb0b3be7a6fa88e",
};

const config_DrugOrdeIPD11223_6 = {
  //6.DrugOrder@IPD11223 โรงพยาบาลหนองฉาง จ.อุทัยธานี
  channelAccessToken:
    "uiVUtUD3ia4FLItUcqxhqBVixHz9o8Dz4582qTIekSZKrjUu4VvTTQc0TT4Xm72MYr7oj/GuxUoqAVK418EqwZJTj/y9jPhfyAcEXBViN2ayHpCY3AxUJ5SxmPp/DKFqrGI0xGSAj8Sd4Y3dOfWAYQdB04t89/1O/w1cDnyilFU=",
  channelSecret: "a3daadaa179a8e46de6ec1cb17d4158a",
};

const config_LUE7 = {
  //7.LUE PAPERLESS โรงพยาบาลลืออำนาจ จังหวัดอำนาจเจริญ
  channelAccessToken:
    "/1eRZvE3J6yQAxc7+2xisfg0L2OrKugeUBgTPN1hrfYcSEr/1U1GRJMokBTO2OliHwCu2B2SzHgbtjMProbmBE/Ke3INdzWPqdIlReArI/QmHsRquGPn8LNdwbgZIkNj0nx3bgmRd4VfS+PzaXpIhwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "4a49028db148fc08b4a7fca9d2419340",
};

const config_Lansak8 = {
  //8.Lansak IPD PPL โรงพยาบาลลานสัก จังหวัดอุทัยธานี
  channelAccessToken:
    "RWyWHIxLGKUnYyeLNH5gNfSEyGMjq1ukf2n6J9RjXZpF+GgYAmXKHXKwQ2RSp1Cv175r88pgyV5ISBiYRlz3l1DIJkJHEeIOBF+deUNTaQOSgwpZK3dCYdRFrY+9JsafDkayWjOz0mhnJzhypdTalQdB04t89/1O/w1cDnyilFU=",
  channelSecret: "ed55f7d20d99d57c1742d7e635db2a71",
};

const config_nongkhayanghospital9 = {
  //9.doctor02 รพ.หนองขาหย่าง  จ.อุทัยธานี
  channelAccessToken:
    "ex5ptlaA7ehwzYWdO0//lanFaIlGehaCfgh/2TioGpdtxYFL0I9NcTAKUTNm1cWmPueN3CfLgfs9M1Kn6CpotONrlNx4ziOPBLTXNAMs7bqkQon2pUwEGdlq2Vob7kI8OBc2PcNV40GgF2SXewgsQAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "3afaab9aafde9feb4c9ed3e056d2cbfe",
};

const config_kdh10 = {
  //10.รคส รพ.กาญจนดิษฐ์  จ.สุราษฏร์ธานี
  channelAccessToken:
    "7kXWhPlYe7VaODog+QyKpzjYBI5mHdY2An7TlVQ4K/21RWQfu6PfllYHYxjTrgR+enboxgHjwVajoYFK0j8fKBnqc2GqT3UHDeeXaWPIH0F0N7KfmXnpIAeO19v05ZCg/XViSi0Om5V4sd1Ue6IK+AdB04t89/1O/w1cDnyilFU=",
  channelSecret: "a2fd305a19dfd302729483d97517d6e9",
};

const config_sawangarom11 = {
  //11.โรงพยาบาลสว่างอารมณ์   รพ.สว่างอารมณ์ จ.อุทัยธานี รหัสสถานพยาบาล 11222
  channelAccessToken:
    "F3roDMrSO4mrMJjh0f8c33St6p+nJAd/dOuNktB1ry0ZOfL3P3d536re+dPXVgFmET4pASZPO1VvssKnDxK4ImMVaC/4lC+dd27dyU5avrB48+pDoSJjGu3gBr679r7JXXbGBSjXUqx+/6UEWwfkTgdB04t89/1O/w1cDnyilFU=",
  channelSecret: "7a026f81e179031bb3ee095dba1905ab",
};

const config_sawangarom12 = {
  //12.IPD-PaperLess-HK โรงพยาบาลสว่างอารมณ์   รพ.ห้วยคต จ.อุทัยธานี 11227
  channelAccessToken:
    "f73H5f4X28zgF1FnDzIcQdHfhG8VcmHcA32lhZwgZhv0Igxg0pm8wXG/rn3Lnq5rIezxoGSZD63TSCcMs4Fq89FyUFen+pvMl84jMW+yyp8s3qmiZhp4j1R5KU/jTlp1kMDsQgAMQHTpyHiqda3HmwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "b827e909e0e3c351f53792eb46e46304",
};

const config_ps13 = {
  //13.IPD Phrasaeng รพ.พระแสง
  channelAccessToken:
    "8URxmbkSCiNAyTK+46s1XseKXEy7Acr3u6WdPv/G45kEVtPvtEZkAs07aVJY6phK7eTbfxM5QC4lqIg8fXG6JgR9C59UZ43CK4QdKOLSbPJ1TmOJQ5U7HkMkQI9B5CSmeCXTuB984/dus5+ll2Y7uAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "1137dea7fdc4f59ea48ce06c4b04aa62",
};

const config_Bantak14 = {
  //14.Bantak Paperless รพ.บ้านตาก
  channelAccessToken:
    "R1srhSyTrNjS6GeWPt7mXjxoRGnSFntZXE+L3CvXzRsDDLIdUpqIwywOe95xjQdb5q0Bloksr0l9YZ2GkCYRR2Xzd4ghGQmFhPWn3ple9gkUPEnPFqx4QXO4FJbUEJHQJpCiHjOiRBwTZspx8y2LCgdB04t89/1O/w1cDnyilFU=",
  channelSecret: "b69a53afa97001434208e66a42bbeeb7",
};

const config_chaiburihospital15 = {
  //15.Paperless รพ.ชัยบุรี
  channelAccessToken:
    "l1ndcCEZ9fEYo6FuVZJ+QxjbJSHcOlHU8mPqdori7aAB2NG9uxmgNRFAIpwH1REykHOTytYlrY4HhrnNQlC4auC6rw52h56l67rSuJxeZxeK8tbZUNtptgehdyjDXP0/ZYtn3OWY39t3NXGn+i4VrQdB04t89/1O/w1cDnyilFU=",
  channelSecret: "b4fd2378dee79287e22c7d6df0eaf086",
};

const config_chaiburihospital16 = {
  //16.HosxpThachang รพ.ท่าฉาง
  channelAccessToken:
    "4RdMswG0ppqweIwlo1Cr2PJf3U4uXXdkb4RB6uEqpbtWlmIJAjybXEXdDMLs+aJIV941uSkrW6kemlTHGdKT15ZfNN4nC3d9YQLy9cRvMgatKWHWTNXBPvrUTIFPz1Y4m4iVPKCj1+tqCIt2t0Kx+gdB04t89/1O/w1cDnyilFU=",
  channelSecret: "4538a6ae46f0774df219606b12e1b336",
};

const config_LBL17 = {
  //18.รพ.ลาดบัวหลวง รคส.
  channelAccessToken:
    "ZJRwmEuE8RYEBxOx9XZh2dNc4ZVIPqh0037REXHUfO8J16VzKJpXYF1xNNxgSfDlOpz+nUcZGzj0E0IKPTfaLJNdaTBN76/h05smgieFo0UCXpG9fqrEhPzCT9vcjMbAppLmHPSAB9ydo2G3BNs59AdB04t89/1O/w1cDnyilFU=",
  channelSecret: "c93952cedcbfa89056f728fceec8c9a1",
};

const config_uthai_hospital18 = {
  //19.uthai_hospital  รพ.อุทัย จ.พระนครศรีอยุธยา
  channelAccessToken:
    "rQxxneh8gAhHxzNbzOTgHfBqWeyIF/rVy3BaKdXmEppsYDmU9gzlm0LrOmtWQZBQAjk3bhQqHbDyVQrDdydi9emrpZitI6lswUIXk6H3YKGiIBOeq0IMMManSFqxG2VUTjk73C6IH2R/ABAZkU5lrwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "27a4238ac61ffe10113ddcf27ec5e0e5",
};

const config_bph19 = {
  //20.bph  รพ.บ้านแพรก
  channelAccessToken:
    "IDxrSxzAIGuRa5Ydaiqjs9IQ8VnwerV4yAr/HusQFeVdCuu59VA9tXMewp8Ul/RmZ2E9GDPp5c2aZFBF4sKrgZaRMO+m+qf8+XBArj4rr1F7UtaTXcAnT24kpFg1fjKVIJpaI8XamjaFl1YurfcPFQdB04t89/1O/w1cDnyilFU=",
  channelSecret: "6d83394d25a0b02f0794ae77a6ab1146",
};

const config_Maharat20 = {
  //21.รคส-มหาราช
  channelAccessToken:
    "Sx403zbn1aJXon9pxqQQzY39VudIIZeb6mgVVJKWU+Gnth9q3csOylpEGRrspJbEcVpecQEmZWtWFwhieDz6nuhwndId4ELKx4FiVE3CXhxLmFnJ1SagOxbc9xkTs9iUp7GyZ1UhgzAEtQmZcDYGIgdB04t89/1O/w1cDnyilFU=",
  channelSecret: "7831a465fdc77ede1d2ec052ae5244b6",
};

const config_webkmhospital21 = {
  //21.Vaccine รพ.เขาชะเมาฯ
  channelAccessToken:
    "r1VG4lIsIOxHHgFZCu/A1bFPsFDSi02JvBfSFvBmbiNkJYkh9PmyjH8Y43pBZ+rbwj6CaE7/qyPAcGn//lzBAVOImZ3Q+tVHEvbvsqTiVybxpQz3UiluX1FvNzVk6n8Kp2FSwlHOhWG5tP100Br44gdB04t89/1O/w1cDnyilFU=",
  channelSecret: "4cf8b7285d5959b2b2e0afed5925f983",
};

const config_chiangsaenhospital22 = {
  //22 Paperlessเชียงแสน รพ.เชียงแสน จ.เชียงราย
  channelAccessToken:
    "+UOhBXc5P9+mSis3vxIKSX5+231UALAgIgb2Nea9kdQXobDqa2M3mmoHm9Iys27rJLGNFr05mrAoQRN0FxqC0D4JEYQATDaCabopFZbvz9tmPob5mHFx40pYSijOiFm44tduY609yllHXh8oREEFNAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "72b193b519cba5587bf25acd8b08c524",
};

const config_nonghanhospital23 = {
  //23.IPD PAPERLESSหนองหาน
  channelAccessToken:
    "rBERwQyarIsJ4tI3dCBOelnme7g2Awel4y4GmqHMz772TV7WjznGdppsqzRaycCA8LdB/NRIlrlpg7nMymDkx3jNuSKgPY4sVxF8YNiWhnLh7oA1aXYan81GxVCqhygQGaqihAUpJlOp4wJ04WPZFwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "929630cfa7cb6f5f5129ac7504193710",
};

const line = require("@line/bot-sdk");
const express = require("express");
const config = require("./config.json");
let config_mult = "";
const app = express();

// webhook callback
app.post(
  "/webhook-developer-BMS",
  line.middleware(config_DeveloperBMS),
  (req, res) => {
    config_mult = config_DeveloperBMS;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

app.post(
  "/webhook-HOSxP_Official",
  line.middleware(config_HOSxP_Official),
  (req, res) => {
    config_mult = config_HOSxP_Official;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

// 1
app.post("/webhook-CPH_HOSP", line.middleware(config_CPH_HOSP1), (req, res) => {
  config_mult = config_CPH_HOSP1;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

// 2
app.post("/webhook-bcph", line.middleware(config_bcph2), (req, res) => {
  config_mult = config_bcph2;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//3
app.post("/webhook-SRN_Hosp", line.middleware(config_SRN_Hosp3), (req, res) => {
  config_mult = config_SRN_Hosp3;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//4
app.post("/webhook-WNY", line.middleware(config_WNY4), (req, res) => {
  config_mult = config_WNY4;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//5
app.post("/webhook-NtvHos", line.middleware(config_NtvHos5), (req, res) => {
  config_mult = config_NtvHos5;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//6
app.post(
  "/webhook-DrugOrdeIPD11223",
  line.middleware(config_DrugOrdeIPD11223_6),
  (req, res) => {
    config_mult = config_DrugOrdeIPD11223_6;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

//7
app.post("/webhook-LUE7", line.middleware(config_LUE7), (req, res) => {
  config_mult = config_LUE7;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//8
app.post("/webhook-Lansak8", line.middleware(config_Lansak8), (req, res) => {
  config_mult = config_Lansak8;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//9
app.post(
  "/webhook-nongkhayanghospital9",
  line.middleware(config_nongkhayanghospital9),
  (req, res) => {
    config_mult = config_nongkhayanghospital9;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

//10
app.post("/webhook-kdh10", line.middleware(config_kdh10), (req, res) => {
  config_mult = config_kdh10;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//11
app.post(
  "/webhook-sawangarom11",
  line.middleware(config_sawangarom11),
  (req, res) => {
    config_mult = config_sawangarom11;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

//12
app.post(
  "/webhook-sawangarom12",
  line.middleware(config_sawangarom12),
  (req, res) => {
    config_mult = config_sawangarom12;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

//13
app.post("/webhook-ps13", line.middleware(config_ps13), (req, res) => {
  config_mult = config_ps13;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//14
app.post("/webhook-Bantak14", line.middleware(config_Bantak14), (req, res) => {
  config_mult = config_Bantak14;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//15
app.post(
  "/webhook-chaiburihospital15",
  line.middleware(config_chaiburihospital15),
  (req, res) => {
    config_mult = config_chaiburihospital15;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

//16
app.post(
  "/webhook-chaiburihospital16",
  line.middleware(config_chaiburihospital16),
  (req, res) => {
    config_mult = config_chaiburihospital16;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

//17
app.post("/webhook-LBL17", line.middleware(config_LBL17), (req, res) => {
  config_mult = config_LBL17;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//18
app.post(
  "/webhook-uthai_hospital18",
  line.middleware(config_uthai_hospital18),
  (req, res) => {
    config_mult = config_uthai_hospital18;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

//19
app.post("/webhook-bph19", line.middleware(config_bph19), (req, res) => {
  config_mult = config_bph19;
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  webhook_post(req.body.events, res);
});

//20
app.post(
  "/webhook-Maharat20",
  line.middleware(config_Maharat20),
  (req, res) => {
    config_mult = config_Maharat20;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

//21
app.post(
  "/webhook-webkmhospital21",
  line.middleware(config_webkmhospital21),
  (req, res) => {
    config_mult = config_webkmhospital21;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

app.post(
  "/webhook-chiangsaenhospital",
  line.middleware(config_chiangsaenhospital22),
  (req, res) => {
    config_mult = config_chiangsaenhospital22;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

app.post(
  "/webhook-config_nonghanhospital23",
  line.middleware(config_nonghanhospital23),
  (req, res) => {
    config_mult = config_nonghanhospital23;
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    webhook_post(req.body.events, res);
  }
);

const webhook_post = (xevent, xres) => {
  console.log(xevent.message);
  Promise.all(
    xevent.map((xevent) => {
      if (
        xevent.replyToken === "00000000000000000000000000000000" ||
        xevent.replyToken === "ffffffffffffffffffffffffffffffff"
      ) {
        return;
      }
      if (xevent.message.text == "#token") {
        return handleEvent(xevent);
      }
    })
  )
    .then(() => xres.end())
    .catch((err) => {
      console.error(err);
      xres.status(500).end();
    });
};

// simple reply function
const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  const client = new line.Client(config_mult);
  return client.replyMessage(
    token,
    texts.map((text) => ({ type: "text", text }))
  );
};

// callback function to handle a single event
function handleEvent(event) {
  switch (event.type) {
    case "message":
      const message = event.message;
      const userId = event.source.userId;
      if (message.type == "text") {
        if (message.text == "#token") {
          return handleUserID(userId, event.replyToken);
        }
      }

    case "follow":
      return replyText(event.replyToken, "Got followed event");

    case "unfollow":
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);

    case "join":
      return replyText(event.replyToken, `Joined ${event.source.type}`);

    case "leave":
      return console.log(`Left: ${JSON.stringify(event)}`);

    case "postback":
      let data = event.postback.data;
      return replyText(event.replyToken, `Got postback: ${data}`);

    case "beacon":
      const dm = `${Buffer.from(event.beacon.dm || "", "hex").toString(
        "utf8"
      )}`;
      return replyText(
        event.replyToken,
        `${event.beacon.type} beacon hwid : ${event.beacon.hwid} with device message = ${dm}`
      );

    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}

function handleText(message, replyToken) {
  // console.log(message)
  return replyText(replyToken, message.text);
}

function handleUserID(message, replyToken) {
  // console.log(message)
  return replyText(replyToken, message);
}

function handleDestination(message, replyToken) {
  // console.log(message)
  return replyText(replyToken, message);
}

function handleImage(message, replyToken) {
  return replyText(replyToken, "Got Image");
}

function handleVideo(message, replyToken) {
  return replyText(replyToken, "Got Video");
}

function handleAudio(message, replyToken) {
  return replyText(replyToken, "Got Audio");
}

function handleLocation(message, replyToken) {
  return replyText(replyToken, "Got Location");
}

function handleSticker(message, replyToken) {
  return replyText(replyToken, "Got Sticker");
}

const port = config.port;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

// {

// 	case "Ud86de05eb938cd1b44fd41cd8d5443f0" :      //HOSxP Official  ตัวแรกที่ใช้งาน
// 	$channelSecret = '';
// 	$access_token = '';
// 	break;
