const data = {
    "all": [
        {
            "id": "713",
            "article_id": "209",
            "fisk_id": "505",
            "comment_id": "247",
            "user_id": "414",
            "created_at": "2017-05-27 01:32:05",
            "updated_at": "2017-05-27 01:32:05",
            "author_id": "21",
            "user": {     
                "id": "414",
                "name": "Priyanka R. Shah",
                "first_name": "Priyanka",
                "last_name": "R. Shah",
                "facebook_id": null,
                "linkedin_profile_image": "https://media.licdn.com/mpr/mprx/0_xgmk4xzvx068XlnGwftFdoLvm-F2lxzI4TPFW3Xv026dhPnwOfPbdQLvffVQX0nagftFJWkvyVEuPmcXS90IfkXPIVE2PmbH490Qsx41YhRLPJ9T4tfbphy32v"
            },
            "respect_id": "713"
        },
        {
            "id": "795",
            "article_id": "209",
            "fisk_id": "505",
            "comment_id": "238",
            "user_id": "414",
            "created_at": "2017-06-27 19:39:02",
            "updated_at": "2017-06-27 19:39:02",
            "author_id": "21",
            "user": {
                "id": "414",
                "name": "Priyanka R. Shah",
                "first_name": "Priyanka",
                "last_name": "R. Shah",
                "facebook_id": null,
                "linkedin_profile_image": "https://media.licdn.com/mpr/mprx/0_xgmk4xzvx068XlnGwftFdoLvm-F2lxzI4TPFW3Xv026dhPnwOfPbdQLvffVQX0nagftFJWkvyVEuPmcXS90IfkXPIVE2PmbH490Qsx41YhRLPJ9T4tfbphy32v"
            },
            "respect_id": "795"
        },
        {
            "id": "798",
            "article_id": "209",
            "fisk_id": "505",
            "comment_id": "237",
            "user_id": "414",
            "created_at": "2017-06-27 19:55:04",
            "updated_at": "2017-06-27 19:55:04",
            "author_id": "21",
            "user": {
                "id": "414",
                "name": "Priyanka R. Shah",
                "first_name": "Priyanka",
                "last_name": "R. Shah",
                "facebook_id": null,
                "linkedin_profile_image": "https://media.licdn.com/mpr/mprx/0_xgmk4xzvx068XlnGwftFdoLvm-F2lxzI4TPFW3Xv026dhPnwOfPbdQLvffVQX0nagftFJWkvyVEuPmcXS90IfkXPIVE2PmbH490Qsx41YhRLPJ9T4tfbphy32v"
            },
            "respect_id": "798"
        },
        {
            "id": "803",
            "article_id": "209",
            "fisk_id": "505",
            "comment_id": "249",
            "user_id": "414",
            "created_at": "2017-06-27 23:51:07",
            "updated_at": "2017-06-27 23:51:07",
            "author_id": "21",
            "user": {
                "id": "414",
                "name": "Priyanka R. Shah",
                "first_name": "Priyanka",
                "last_name": "R. Shah",
                "facebook_id": null,
                "linkedin_profile_image": "https://media.licdn.com/mpr/mprx/0_xgmk4xzvx068XlnGwftFdoLvm-F2lxzI4TPFW3Xv026dhPnwOfPbdQLvffVQX0nagftFJWkvyVEuPmcXS90IfkXPIVE2PmbH490Qsx41YhRLPJ9T4tfbphy32v"
            },
            "respect_id": "803"
        },
        {
            "id": "807",
            "article_id": "209",
            "fisk_id": "505",
            "comment_id": "238",
            "user_id": "415",
            "created_at": "2017-06-28 01:39:14",
            "updated_at": "2017-06-28 01:39:14",
            "author_id": "21",
            "user": {
                "id": "415",
                "name": "Suhas Deshpande",
                "first_name": "Suhas",
                "last_name": "Deshpande",
                "facebook_id": null,
                "linkedin_profile_image": "https://media.licdn.com/mpr/mprx/0_1rcIth3HMWaU0Lb0PtoS-3hwMH-gmdb0KJo2QOjHWWaR0LEV33I2b3hweMfcRWFszvIeG6TaR2CRu4Vq8UQk5R3Hu2CUu4UJCUQdrhjeJ91tu7oKC0nHsKlYII"
            },
            "respect_id": "807"
        }
    ],
    "current_user": []
};

console.log(
  data.all.reduce(
    (acc, curr) => {
      var commentId = curr['comment_id'];
      if(acc[commentId]) {
        acc[commentId].push(curr['user']['id'])
      }else{
        acc[commentId] = [curr['user']['id']]
     }
      return acc;
    }, {}
  )
);
