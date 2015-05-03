(function(window, undefined) {
  var dictionary = {
    "af9593a3-a42d-48a7-8042-039dd48c3532": "Welcome_logged",
    "e92676f7-5d34-410e-b7ac-dd77a7c63387": "WelcomeScr",
    "1aa45bc7-5b70-41f9-811b-eb233d15fd7e": "Login",
    "068c35a3-a3eb-4a0e-b3fd-d826c3f09439": "Academics",
    "9df1bad1-52b7-438f-8038-9e522bd84900": "News",
    "94648e5c-3eff-4b77-ba19-7c0727bbe09d": "About",
    "ab0788e0-6882-4855-8bd4-5bf94d09ba36": "MyProgramm",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);