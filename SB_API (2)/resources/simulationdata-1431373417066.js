function initData() {
  jimData.variables["Mail"] = "";
  jimData.datamasters["allStories"] = [
    {
      "id": 1,
      "datamaster": "allStories",
      "userdata": {
        "topStories": "http://www.aueb.gr/pages/news/anakoinosi_item.php?catid=31&index=0",
        "latestNews": "http://www.aueb.gr/pages/news/attachments/2332.pdf",
        "extNews": "http://www.aueb.gr/pages/organoseis/#AIESEC"
      }
    },
    {
      "id": 2,
      "datamaster": "allStories",
      "userdata": {
        "topStories": "http://www.aueb.gr/pages/news/anakoinosi_item.php?catid=31&index=1",
        "latestNews": "http://www.aueb.gr/pages/news/attachments/2257_apr.pdf",
        "extNews": "http://www.aueb.gr/pages/organoseis/#Erasmos"
      }
    }
  ];

  jimData.datamasters["Mail"] = [
    {
      "id": 1,
      "datamaster": "Mail",
      "userdata": {
        "From": "Danny Pej",
        "Subject": "Material Design",
        "Body": "There is the new Material Design Style, take a look.",
        "Read": "That is awesome!! I love this design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "15m",
        "Picture": "./images/4b824737-1d11-45eb-9e53-23e21196ac5e.png",
        "Star": "./images/83a80f0c-f80b-4bc3-8fd6-e338929751f9.png"
      }
    },
    {
      "id": 2,
      "datamaster": "Mail",
      "userdata": {
        "From": "Milena Intelisan",
        "Subject": "Weekend meeting?",
        "Body": "Can you meet this weekend with us at the restaurant?",
        "Read": "Of course, call me on friday to fix the hour, please. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "3h",
        "Picture": "./images/44ceb277-b758-40e8-85f9-eddafd8a885d.png",
        "Star": "./images/8f1cc740-ab82-41d7-93c0-5f8fad1d78b3.png"
      }
    },
    {
      "id": 3,
      "datamaster": "Mail",
      "userdata": {
        "From": "Imma Mustard",
        "Subject": "Take a look",
        "Body": "There is a new design. Check it the layouts and tell me something.",
        "Read": "That is awesome!! I love this design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "1:39pm",
        "Picture": "./images/cb071203-b362-41a0-8716-03521ad73585.png",
        "Star": "./images/0a0151b8-0864-496b-9d10-8d16dffa290c.png"
      }
    },
    {
      "id": 4,
      "datamaster": "Mail",
      "userdata": {
        "From": "Montse Hall",
        "Subject": "Important news",
        "Body": "That is awesome!! Please read this...",
        "Read": "Great news!, congratulations!. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "Nov 03",
        "Picture": "./images/42ff11c4-0410-4bde-b7b0-1e97b24f95e2.png",
        "Star": "./images/d9514fbe-0f40-40af-8f74-17e6b7a8af48.png"
      }
    },
    {
      "id": 5,
      "datamaster": "Mail",
      "userdata": {
        "From": "Albert Lives",
        "Subject": "What's for dinner?",
        "Body": "If you need some inspiration for your own dinner tonight, call me.",
        "Read": "This is  a surprise!. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "Oct 29",
        "Picture": "./images/71cd18d0-807c-4fdf-be01-bdd72cfbe877.png",
        "Star": "./images/d6351c95-b09c-4484-9752-22af14be119d.png"
      }
    },
    {
      "id": 6,
      "datamaster": "Mail",
      "userdata": {
        "From": "Imma Gari",
        "Subject": "Hello there!!",
        "Body": "It's been a long time since we last met",
        "Read": "Can you give me some time to think about this and can we talk tomorrow? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "Oct 27",
        "Picture": "./images/4b78e670-1458-42db-9762-68dfab7569ad.png",
        "Star": "./images/b01912fa-c2d4-4ea3-b8a1-14e41d406fef.png"
      }
    },
    {
      "id": 7,
      "datamaster": "Mail",
      "userdata": {
        "From": "Xavier Commes",
        "Subject": "New route!!",
        "Body": "I found this interesting route, let's ride this sunday.",
        "Read": "Great route. This weekend lests ride! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "sample text",
        "Picture": "./images/48738ed2-5a34-4c0c-b0c3-6995951a090c.png",
        "Star": "./images/1d805fd2-49ad-40ff-9f5d-63c52e073ce2.png"
      }
    }
  ];

  jimData.datamasters["Courses"] = [
    {
      "id": 1,
      "datamaster": "Courses",
      "userdata": {
        "Hours": "9-11",
        "Monday": "sample text",
        "Tuesday": "sample text",
        "Wednesday": "sample text",
        "Thursday": "sample text",
        "Friday": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "Courses",
      "userdata": {
        "Hours": "11-13",
        "Monday": "sample text",
        "Tuesday": "sample text",
        "Wednesday": "sample text",
        "Thursday": "sample text",
        "Friday": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "Courses",
      "userdata": {
        "Hours": "13-15",
        "Monday": "sample text",
        "Tuesday": "sample text",
        "Wednesday": "sample text",
        "Thursday": "sample text",
        "Friday": "sample text"
      }
    },
    {
      "id": 4,
      "datamaster": "Courses",
      "userdata": {
        "Hours": "15-17",
        "Monday": "sample text",
        "Tuesday": "sample text",
        "Wednesday": "sample text",
        "Thursday": "sample text",
        "Friday": "sample text"
      }
    },
    {
      "id": 5,
      "datamaster": "Courses",
      "userdata": {
        "Hours": "17-19",
        "Monday": "sample text",
        "Tuesday": "sample text",
        "Wednesday": "sample text",
        "Thursday": "sample text",
        "Friday": "sample text"
      }
    },
    {
      "id": 6,
      "datamaster": "Courses",
      "userdata": {
        "Hours": "19-21",
        "Monday": "sample text",
        "Tuesday": "sample text",
        "Wednesday": "sample text",
        "Thursday": "sample text",
        "Friday": "sample text"
      }
    }
  ];

  jimData.datamasters["Dep_News"] = [
    {
      "id": 1,
      "datamaster": "Dep_News",
      "userdata": {
        "Int_Dep_News": "sample text",
        "Ext_Dep_News": "sample text",
        "Top_Dep_News": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "Dep_News",
      "userdata": {
        "Int_Dep_News": "sample text",
        "Ext_Dep_News": "sample text",
        "Top_Dep_News": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "Dep_News",
      "userdata": {
        "Int_Dep_News": "sample text",
        "Ext_Dep_News": "sample text",
        "Top_Dep_News": "sample text"
      }
    },
    {
      "id": 4,
      "datamaster": "Dep_News",
      "userdata": {
        "Int_Dep_News": "sample text",
        "Ext_Dep_News": "sample text",
        "Top_Dep_News": "sample text"
      }
    },
    {
      "id": 5,
      "datamaster": "Dep_News",
      "userdata": {
        "Int_Dep_News": "sample text",
        "Ext_Dep_News": "sample text",
        "Top_Dep_News": "sample text"
      }
    },
    {
      "id": 6,
      "datamaster": "Dep_News",
      "userdata": {
        "Int_Dep_News": "sample text",
        "Ext_Dep_News": "sample text",
        "Top_Dep_News": "sample text"
      }
    }
  ];

  jimData.isInitialized = true;
}