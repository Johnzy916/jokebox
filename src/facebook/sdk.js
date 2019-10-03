const initializeFacebookSDK = () => {
    window.fbAsyncInit = () => {
        FB.init({
          appId            : '501093044010357',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v4.0'
        });
        
        FB.XFBML.parse();
    }
    
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

export { initializeFacebookSDK as default };

/*global FB*/