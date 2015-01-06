// sample.js

// Layer
var Sample = cc.Layer.extend ({
	init:function () {
		this._super();
		var _this = this;

		var size = cc.Director.getInstance().getWinSize();
		
		// 宇宙船
		this.ship = cc.LabelTTF.create("(´・ω・｀)", "Arial", 38);
		this.ship.setPosition(cc.p(size.width/2, size.height/2));
		this.addChild(this.ship,5);

		// 隕石
		this.enemies = [];
		for (var i=0; i<15; i++) {
			var enemy = cc.LabelTTF.create("w", "Arial", 38);
			enemy.v = cc.p( -5, Math.random()-0.5 * 3 ); // 隕石の速度
			enemy.setColor(cc.color(255, 0, 0)); // あか
			enemy.setPosition(cc.p((Math.random() + 1) * size.width, Math.random() * size.height));
			this.addChild(enemy, 10);
			this.enemies.push(enemy);
		}

		// タッチイベントを設定
		cc.eventManager.addListener(
			cc.EventListener.create({
				event: cc.EventListener.TOUCH_ALL_AT_ONCE,
				onTouchesBegan: function(touches, event){
					_this.touched = touches[0].getLocation();
				},
				onTouchesMoved: function(touches, event){
					_this.touched = touches[0].getLocation();
				},
		}), this);

		// 定期的にthis.updateメソッドを呼ぶ
		this.scheduleUpdate();
		 
		return true;
	},
	update:function(dt) {
		var size = cc.Director.getInstance().getWinSize();
		for (var i=0; i < this.enemies.length; i++) {
			var enemy = this.enemies[i];
			var pos = enemy.getPosition();
			pos = cc.p(pos.x, pos.y); // getPositionの結果をそのまま変更するとエラー
			pos.x += enemy.v.x;
			pos.y += enemy.v.y;

			// 画面から出ないように
			if (pos.x < 0) pos.x = size.width;
			if (pos.y < 0) pos.y = size.height;
			if (pos.y > size.height) pos.y = 0;
			enemy.setPosition(pos);
		}
		// 船の位置を調整
		var shipPos = this.ship.getPosition();
		if (this.touched) {
			var k = 0.7;
			shipPos.y = (shipPos.y * k) + (this.touched.y * (1.0 - k));
			this.ship.setPosition(shipPos);
		}
	},
					
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
