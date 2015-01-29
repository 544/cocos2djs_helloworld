//result.js

var g = {
	score:0,
};

var Result = cc.Layer.extend({
	init:function() {
		this._super();
		var _this = this;

		var size = cc.Director.getInstance().getWinSize();

		var resultLabel = cc.LabelTTF.create("今回のスコア " + g.score, "Arial" ,20);
		resultLabel.setPosition(cc.p(size.width /2, size.height /2));
		this.addChild(resultLabel);

		return true;
	},
});

var ResultScene = cc.Scene.extend({
	onEnter:function() {
		this._super();
		var layer = new Result();
		layer.init();
		this.addChild(layer);
	}
})

