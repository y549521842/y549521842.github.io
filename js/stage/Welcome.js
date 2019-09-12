CPWL.Welcome = function (stage) {
    CPWL.Page.call(this, stage);
    var me = this;
    this.modal = H.createEl("div", {
        position: "relative",
        borderRadius: "10px",
        left: "0px",
        top: "0px",
        width: "600px",
        height: "300px",
        backgroundColor: "#00E0FF"
    }, this.el);
    this.text = H.createEl("div", {
        position: "absolute",
        visibility: "hidden",
        fontWeight: "bolder",
        fontSize: "2em",
        color: "white",
        font: "Arial"
    }, this.el);
    this.text.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp我趟过泥泞还在坚持前行，我穿过雾霾还在仰望星空，我受过嘲讽还在保持真我，我隐忍，我高和，我低头，我昂首，只因为我还有一个梦想，梦想这个梦想能够成为不是梦想的梦想——许国泓";

    this.init();
}
CPWL.Welcome.prototype = Object.create(CPWL.Page.prototype);
CPWL.Welcome.prototype.constructor = CPWL.Welcome;
CPWL.Welcome.prototype.init = function () {
    H.center(this.text);
    TweenLite.set(this.modal, {
        autoAlpha: 0.2
    });
    this.launchTween
        .to(this.el, 0.1, {
            scaleX: 1,
            startAt: {
                transformOrigin: "50% 0%",
                scaleX: 0,
                scaleY: 0.2,
                autoAlpha: 1
            },
            onStart: function () {
                soundManager.play("click");
            }
        })
        .to(this.el, 0.1, {
            scaleY: 1,
            onStart: function () {
                //soundManager.play("click");
            }
        }, "+=0.1")
        .addLabel("show")
        .add(H.createTweenTwinkleShow(this.text), "+=0.2")
        .to(this.close.el,0.2,{
            autoAlpha : 1,
            scale : 1,
            rotation : 0,
            startAt : {
                scale : 0,
                rotation : 90
            }
        },"-=0.6");

    this.quitTween.to(this.el, 0.3, {
        scaleY: 0,
        startAt: {
            transformOrigin: "50% 50%"
        },
        onStart: function () {
            //soundManager.play("click");
        }
    });
};
CPWL.Welcome.prototype.launchEffect = function () {
    this.launchTween.restart();
};
CPWL.Welcome.prototype.quitEffect = function () {
    this.quitTween.restart();
};
