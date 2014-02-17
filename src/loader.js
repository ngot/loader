;(function (w){

	var l = function (){
		css = [];
		js = [];
	};

	l.setCss = function (n){
		this.prototype.css = n;
	};

	l.getCss = function (){
		return this.prototype.css;
	};

	l.setJs = function (n){
		this.prototype.js = n;
	};

	l.getJs = function (){
		return this.prototype.js;
	};

	var domain;
	var head = document.getElementsByTagName("head")[0];

	var s = location.search;
	if(s != '') {
		location = location.pathname + '#' + s.substr(1);
		return;
	}

	function loader(){
		var scripts = document.getElementsByTagName('script');
		var r = new RegExp("http://([^/]+)/")
			.exec(scripts[scripts.length - 1].src);

		if(r)
			domain = r[1];
		else
			domain = location.host;

		w.url = domain;

		var css = l.getCss();

		var deps = [];

		var js = l.getJs();

		var body = document.body || document.getElementsByTagName('body')[0] || document.documentElement;

		if(location.protocol == 'http:') {
			var host = location.hostname;
			if(host.search(/[a-z]/i) == -1)
				w.url = host;
		}

		function run_load(){
			console.log("run_load");
			var script_id = 0;
			var jss = deps.concat(js);
			var ie9less = ("ActiveXObject" in w) && !("atob" in w);

			function load_script(){
				if(script_id < jss.length) {
					var c = document.createElement("script");
					c.type = "text/javascript";
					if(c.readyState)
						c.onreadystatechange = function (){
							if(this.readyState == 'loaded')
								setTimeout(load_script, 0);
						};
					else
						c.onload = load_script;
					c.src = 'http://' + domain + jss[script_id];
					body.appendChild(c);
					script_id++;
				}
			}

			for (var v in css) {
				if(ie9less && css[v].indexOf("phone/") > -1)
					continue;
				var c = document.createElement('link');
				c.type = 'text/css';
				c.rel = 'stylesheet';
				c.href = 'http://' + domain + '/res/' + css[v] + '.css';
				head.appendChild(c);
			}
			load_script();
		}

		if('cordova' in w)
			document.addEventListener("deviceready", run_load, false);
		else
			run_load();
	}

	l.start = function (){
		if(document.body)
			loader();
		else
			w.onload = loader();
	};

	w.$l = l;
})(window);