describe('mil', function () {
	var mil = window.mil;

	it('测试加载js文件', function () {
		mil({
			url: '127.0.0.1:9876',
			js: 'base/temp/index.js'
		});
		var script = window.document.body.getElementsByTagName("script");
		assert.equal('http://127.0.0.1:9876/base/temp/index.js', script[8].src);
	});

	it('测试加载css文件', function () {
		mil({
			url: '127.0.0.1:9876',
			css: 'base/temp/style.css'
		});
		var link = window.document.head.getElementsByTagName("link");
		assert.equal('http://127.0.0.1:9876/base/temp/style.css', link[0].href);
	});

	it('测试同时加载js和css文件', function () {
		mil({
			url: '127.0.0.1:9876',
			js: 'base/temp/index.js',
			css: 'base/temp/style.css'
		});
		var script = window.document.body.getElementsByTagName("script");
		assert.equal('http://127.0.0.1:9876/base/temp/index.js', script[8].src);

		var link = window.document.head.getElementsByTagName("link");
		assert.equal('http://127.0.0.1:9876/base/temp/style.css', link[0].href);
	});

});