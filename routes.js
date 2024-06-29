"use strict";

const admin_verification = require("./middleware/admin_verification");
const user_verfication = require("./middleware/user_verification");
const apiAdmin = require("./controllers/admin");
const apiUser = require("./controllers/user");

module.exports = function (app) {

  //API ADMIN

  //LOGIN

  app
    .route("/v1/web/login")
    .post(apiAdmin.account_controller.login);


  app
    .route("/v1/web/animals")
    .get(admin_verification, apiAdmin.animal_controller.webanimals);


  app
    .route("/v1/web/animal/:id")
    .get(admin_verification, apiAdmin.animal_controller.webanimalid);

  app
    .route("/v1/web/animal/edit/:id")
    .put(admin_verification, apiAdmin.animal_controller.webanimaledit);

  app
    .route("/v1/web/animal/delete/:id")
    .delete(admin_verification, apiAdmin.animal_controller.webanimaldelete);

  app
    .route("/v1/web/request/accounts")
    .get(admin_verification, apiAdmin.request_account_controller.webrequestaccounts);

  app
    .route("/v1/web/request/account/:id")
    .get(admin_verification, apiAdmin.request_account_controller.webrequestaccountid);

  app
    .route("/v1/web/request/account/approve/:id")
    .put(admin_verification, apiAdmin.request_account_controller.webapproverequestaccount);

  app
    .route("/v1/web/request/datas")
    .get(admin_verification, apiAdmin.request_data_controller.webrequestdatas);

  app
    .route("/v1/web/request/data/:id")
    .get(admin_verification, apiAdmin.request_data_controller.webrequestdataid);

  app
    .route("/v1/web/request/data/approve/:id")
    .put(admin_verification, apiAdmin.request_data_controller.webapproverequestdata);

  app
    .route("/v1/web/request/data/approve/send")
    .post(admin_verification, apiAdmin.request_data_controller.websendrequestdata);

  app
    .route("/v1/web/history/request/data")
    .get(admin_verification, apiAdmin.history_request_data_controller.webhistoryrequestdatas);

  app
    .route("/v1/web/history/request/data/:id")
    .get(admin_verification, apiAdmin.history_request_data_controller.webhistoryrequestdataid);

  app.route("/v1/web/users").get(admin_verification, apiAdmin.user_controller.webusers);

  app.route("/v1/web/user/:id").get(admin_verification, apiAdmin.user_controller.webuserid);

  app
    .route("/v1/web/user/suspend")
    .put(admin_verification, apiAdmin.user_controller.webusersuspend);

  //API USER

  app.route("/v1/mob/user/login").post(apiUser.auth.login);

  app
    .route("/v1/mob/animals/editable")
    .get(user_verfication, apiUser.editable_animal_controller.mobeditableanimals);

  app.route("/v1/mob/user/check").get(apiUser.auth.check_user);

  app
    .route("/v1/mob/animal/:id_animal")
    .get(apiUser.editable_animal_controller.mobeditableanimalid);

  app
    .route("/v1/mob/animal/add")
    .post(user_verfication, apiUser.editable_animal_controller.mobanimalpost);

  app
    .route("/v1/mob/animal/editable/edit/:id_animal")
    .put(apiUser.editable_animal_controller.mobediteditableanimal);

  app
    .route("/v1/mob/animal/editable/delete/:id_animal")
    .delete(apiUser.editable_animal_controller.deleteAnimalById);

  app
    .route("/v1/mob/animal/upload/image")
    .post(apiUser.editable_animal_controller.mob_upload_image);

  app
    .route("/v1/mob/animal/delete/image")
    .delete(apiUser.editable_animal_controller.deleteImageByURL);

  app
    .route("/v1/mob/animals/history")
    .get(apiUser.history_animal_controller.mobhistoryanimals);

  app
    .route("/v1/mob/animal/history/:id_animal")
    .get(apiUser.history_animal_controller.mobhistoryanimalid);

  app
    .route("/v1/mob/user/account")
    .get(apiUser.account_controller.mobaccount);

  app
    .route("/v1/mob/user/account/edit/name")
    .put(apiUser.account_controller.mobaccounteditname);

  app
    .route("/v1/mob/user/account/edit/picture")
    .put(apiUser.account_controller.mob_update_profile);

  app
    .route("/v1/mob/user/account/edit/password")
    .put(apiUser.account_controller.mobaccounteditpassword);

  app
    .route("/v1/mob/user/request-datas")
    .get(apiUser.request_data_controller.mobhistoryrequestdata);
  app
    .route("/v1/mob/user/request-data/:id_request_data")
    .get(apiUser.request_data_controller.mobhistoryrequestdatabyid);
  app
    .route("/v1/mob/user/request-data/add")
    .post(apiUser.request_data_controller.mobaddrequestdata);

  app
    .route("/v1/mob/user/register")
    .post(apiUser.account_controller.mobregisteruser);

  app
    .route("/v1/mob/user/check-password")
    .post(apiUser.account_controller.mobaccountpassword);
  app
    .route("/v1/mob/user/new_password")
    .put(apiUser.account_controller.mobpasswordedit);




  //FORGET PASSWORD
  app
    .route("/v1/web/user/forgot-password")
    .post(apiUser.account_controller.mobforgotpassword);

  //REQUEST DATA GUEST
  app.route("/v1/web/user/request-data")
    .post(apiUser.request_data_controller.requestDataGuest)
};
