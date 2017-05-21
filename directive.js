app.directive("quote", function(){
	return {
		restrict    : "E",
        templateUrl : "quotes"+ Math.floor(Math.random() * 3) + ".html"
	};
});

app.directive("tentang", function(){
	return {
		restrict : "E",
		"templateUrl" : "tentang.html"
	};
})