// sample.js

// Layer
var Sample = cc.Layer.extend ({
	init:function () {
		this._super();
		var size = cc.Director.getInstance().getWinSize();
		
		this.helloLabel = cc.LabelTTF.create("(´・ω・｀)", "Arial", 38);
		this.helloLabel.setPosition(cc.p(size.width/2, size.height/2));
		this.addChild(this.helloLabel,5);
		
//		this.setTouchEnabled(true);
		return true;
	},
	
	onTouchesBegan:function(touches, event){ cc.log("hoge");},
	onTouchesMoves:function(touches, event){cc.log("hoge");},
	onTouchesEnded:function(touches, event){cc.log("hoge");},
	onTouchesCancelled:function(touches, event){cc.log("hoge");},
})

// Scene
var SampleScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new Sample();
		layer.init();
		this.addChild(layer);
	}
})
