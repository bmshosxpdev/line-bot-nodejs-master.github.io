"use strict";
// 

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
