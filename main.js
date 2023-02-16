"use strict";
(self["webpackChunkshiftus_frontend"] = self["webpackChunkshiftus_frontend"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'app-root',
        template: `<router-outlet></router-outlet>`,
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "snackbarConfig": () => (/* binding */ snackbarConfig)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/logger-plugin */ 5011);
/* harmony import */ var _components_login_login_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.state */ 5110);
/* harmony import */ var _common_authService_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/authService/auth.guard */ 2287);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fullcalendar/angular */ 5717);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ 9520);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_calendar_calendar_detail_calendar_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/calendar/calendar-detail/calendar-detail.component */ 9678);
/* harmony import */ var _components_administration_worker_register_worker_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/administration/worker-register/worker-register.component */ 6219);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/calendar/calendar.component */ 3373);
/* harmony import */ var _components_worker_worker_detail_worker_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/worker/worker-detail/worker-detail.component */ 9689);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 3581);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/daygrid */ 3947);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullcalendar/interaction */ 5194);
/* harmony import */ var _components_administration_administration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/administration/administration.component */ 4797);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ 2340);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// States


// Third party Components



// App components













const routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
    },
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent,
        canActivate: [_common_authService_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        children: [
            {
                path: 'calendar',
                component: _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__.CalendarComponent,
                canActivate: [_common_authService_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
            },
            {
                path: 'calendar/detail/:id',
                component: _components_calendar_calendar_detail_calendar_detail_component__WEBPACK_IMPORTED_MODULE_6__.CalendarDetailComponent,
                canActivate: [_common_authService_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
            },
            {
                path: 'worker/:workerId',
                component: _components_worker_worker_detail_worker_detail_component__WEBPACK_IMPORTED_MODULE_10__.WorkerDetailComponent,
                canActivate: [_common_authService_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
            },
            {
                path: 'admin',
                component: _components_administration_administration_component__WEBPACK_IMPORTED_MODULE_14__.AdministrationComponent,
                canActivate: [_common_authService_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
            },
            {
                path: 'admin/register',
                component: _components_administration_worker_register_worker_register_component__WEBPACK_IMPORTED_MODULE_7__.WorkerRegisterComponent,
                canActivate: [_common_authService_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
            },
        ],
    },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__.PageNotFoundComponent },
];
const states = [_components_login_login_state__WEBPACK_IMPORTED_MODULE_2__.LoginState];
_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__.FullCalendarModule.registerPlugins([_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_12__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_13__["default"]]);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__.AppComponent,
            _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__.CalendarComponent,
            _components_worker_worker_detail_worker_detail_component__WEBPACK_IMPORTED_MODULE_10__.WorkerDetailComponent,
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__.PageNotFoundComponent,
            _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent,
            _components_administration_worker_register_worker_register_component__WEBPACK_IMPORTED_MODULE_7__.WorkerRegisterComponent,
            _components_administration_administration_component__WEBPACK_IMPORTED_MODULE_14__.AdministrationComponent,
            _components_calendar_calendar_detail_calendar_detail_component__WEBPACK_IMPORTED_MODULE_6__.CalendarDetailComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__.FullCalendarModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forRoot(routes),
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_27__.MatTableModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forRoot(states),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_1__.NgxsLoggerPluginModule.forRoot(),
            _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
        ],
        providers: [_common_authService_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__.AppComponent],
    })
], AppModule);

const API_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_15__.environment.api_url}/api`;
const snackbarConfig = {
    duration: 2500,
    verticalPosition: 'top',
    horizontalPosition: 'right',
};


/***/ }),

/***/ 9569:
/*!*****************************************************!*\
  !*** ./src/app/common/api/dayoff/dayoff.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayoffService": () => (/* binding */ DayoffService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _components_login_login_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/login/login.state */ 5110);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.module */ 6747);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let DayoffService = class DayoffService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this._subscription.add(this.loginState.subscribe((_loginState) => {
            this._loginState = _loginState;
        }));
    }
    getDayoffByUserId(userId) {
        return this.httpClient.get(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/dayoff/user/${userId}${this._loginState.api_token}`);
    }
    saveDayoffs(userId, params) {
        return this.httpClient.post(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/dayoff/user/${userId}${this._loginState.api_token}`, { dayoffs: params });
    }
};
DayoffService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_components_login_login_state__WEBPACK_IMPORTED_MODULE_1__.LoginState)
], DayoffService.prototype, "loginState", void 0);
DayoffService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], DayoffService);



/***/ }),

/***/ 5355:
/*!***************************************************!*\
  !*** ./src/app/common/api/error/error.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorService": () => (/* binding */ ErrorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _components_login_login_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/login/login.state */ 5110);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.module */ 6747);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ErrorService = class ErrorService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this._subscription.add(this.loginState.subscribe((_loginState) => {
            this._loginState = _loginState;
        }));
    }
    getAvailableDoctors(error) {
        return this.httpClient.post(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/error/doctors${this._loginState.api_token}`, { error: error });
    }
    replaceDoctors(doctorWithError, availableDoctor) {
        return this.httpClient.put(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/error/doctors/replace${this._loginState.api_token}`, {
            errorId: doctorWithError.errorId,
            role: doctorWithError.role,
            idDoctorWithErrors: doctorWithError.id,
            idAvailableDoctor: availableDoctor,
        });
    }
};
ErrorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_components_login_login_state__WEBPACK_IMPORTED_MODULE_1__.LoginState)
], ErrorService.prototype, "loginState", void 0);
ErrorService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], ErrorService);



/***/ }),

/***/ 4408:
/*!***************************************************!*\
  !*** ./src/app/common/api/shift/shift.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftService": () => (/* binding */ ShiftService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _components_login_login_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/login/login.state */ 5110);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.module */ 6747);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ShiftService = class ShiftService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this._subscription.add(this.loginState.subscribe((_loginState) => {
            this._loginState = _loginState;
        }));
    }
    getCalendar() {
        return this.httpClient.get(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/calendar${this._loginState.api_token}`);
    }
    createCalendar(month) {
        return this.httpClient.get(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/calendar/create/${month}${this._loginState.api_token}`);
    }
    getDay(id) {
        return this.httpClient.get(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/calendar/day/${id}${this._loginState.api_token}`);
    }
    getUserShifts(id) {
        return this.httpClient.get(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/shift/${id}/all${this._loginState.api_token}`);
    }
};
ShiftService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(_components_login_login_state__WEBPACK_IMPORTED_MODULE_0__.LoginState)
], ShiftService.prototype, "loginState", void 0);
ShiftService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], ShiftService);



/***/ }),

/***/ 9494:
/*!*************************************************!*\
  !*** ./src/app/common/api/team/team.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamService": () => (/* binding */ TeamService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _components_login_login_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/login/login.state */ 5110);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.module */ 6747);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let TeamService = class TeamService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this._subscription.add(this.loginState.subscribe((_loginState) => {
            this._loginState = _loginState;
        }));
    }
    getTeams() {
        return this.httpClient.get(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/team/all${this._loginState.api_token}`);
    }
    getTeam(id) {
        return this.httpClient.get(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/team/${id}${this._loginState.api_token}`);
    }
    updateUser(params) {
        return this.httpClient.post(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/team/${params.id}${this._loginState.api_token}`, { user: params });
    }
    createTeam(params) {
        //TODO Create team to backend
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
    }
};
TeamService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_components_login_login_state__WEBPACK_IMPORTED_MODULE_1__.LoginState)
], TeamService.prototype, "loginState", void 0);
TeamService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], TeamService);



/***/ }),

/***/ 695:
/*!*************************************************!*\
  !*** ./src/app/common/api/user/user.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _components_login_login_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/login/login.state */ 5110);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.module */ 6747);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let UserService = class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this._subscription.add(this.loginState.subscribe((_loginState) => {
            this._loginState = _loginState;
        }));
    }
    getUsers() {
        return this.httpClient.get(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/user/all${this._loginState.api_token}`);
    }
    getUser(id) {
        return this.httpClient.get(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/user/${id}${this._loginState.api_token}`);
    }
    updateUser(params) {
        return this.httpClient.post(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.API_URL}/user/${params.id}${this._loginState.api_token}`, { user: params });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_components_login_login_state__WEBPACK_IMPORTED_MODULE_1__.LoginState)
], UserService.prototype, "loginState", void 0);
UserService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ 2287:
/*!**************************************************!*\
  !*** ./src/app/common/authService/auth.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 1057);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        // if (this.authService.isLogged()) {
        //   return true;
        // }
        // this.router.navigateByUrl(
        //   this.router.createUrlTree(
        //     ['/login']
        //   )
        // );
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AuthGuard);



/***/ }),

/***/ 1057:
/*!****************************************************!*\
  !*** ./src/app/common/authService/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.module */ 6747);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.logged = false;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        this.defaultHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    login(credentials) {
        return this.httpClient.post(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.API_URL}/auth/login`, credentials, {
            headers: this.defaultHeaders,
        });
    }
    register(user) {
        return this.httpClient.post(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.API_URL}/auth/register`, user, {
            headers: this.defaultHeaders,
        });
    }
    logout(user) {
        return this.httpClient.post(`${src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.API_URL}/logout`, user, {
            headers: this.defaultHeaders,
        });
    }
    setToken(token) { }
    isLogged() {
        return this.logged;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 1743:
/*!**************************************!*\
  !*** ./src/app/common/model/user.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternRoleEnum": () => (/* binding */ InternRoleEnum)
/* harmony export */ });
var InternRoleEnum;
(function (InternRoleEnum) {
    InternRoleEnum["residentSenior"] = "RSenior";
    InternRoleEnum["residentJunior"] = "RJunior";
    InternRoleEnum["administrator"] = "admin";
})(InternRoleEnum || (InternRoleEnum = {}));


/***/ }),

/***/ 4797:
/*!***********************************************************************!*\
  !*** ./src/app/components/administration/administration.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationComponent": () => (/* binding */ AdministrationComponent)
/* harmony export */ });
/* harmony import */ var _administration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administration.component.html?ngResource */ 6945);
/* harmony import */ var _administration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administration.component.scss?ngResource */ 9756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _common_api_shift_shift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/api/shift/shift.service */ 4408);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! luxon */ 9527);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 6747);
/* harmony import */ var src_app_common_api_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/api/user/user.service */ 695);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AdministrationComponent = class AdministrationComponent {
    constructor(shiftService, userService, _snackBar) {
        this.shiftService = shiftService;
        this.userService = userService;
        this._snackBar = _snackBar;
        this.months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        this.displayedColumns = ['name', 'email', 'role', 'edit', 'delete'];
        this.adminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this._subscription.add(this.userService.getUsers().subscribe(res => {
            //TODO filter admin users in API side
            res.shift();
            this.doctors = res;
        }));
    }
    ngOnInit() {
        const nextMonth = luxon__WEBPACK_IMPORTED_MODULE_7__.DateTime.local().month + 1 < 12 ? luxon__WEBPACK_IMPORTED_MODULE_7__.DateTime.local().month + 1 : 1;
        this.adminForm.controls['month'].setValue(nextMonth);
    }
    createShifts() {
        this._subscription.add(this.shiftService
            .createCalendar(this.adminForm.get('month').value)
            .subscribe((res) => {
            this._snackBar.open(res.message, '', {
                ...src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.snackbarConfig,
                panelClass: ['green-snackbar'],
            });
        }));
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
};
AdministrationComponent.ctorParameters = () => [
    { type: _common_api_shift_shift_service__WEBPACK_IMPORTED_MODULE_2__.ShiftService },
    { type: src_app_common_api_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar }
];
AdministrationComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'shift-administration',
        template: _administration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_administration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdministrationComponent);



/***/ }),

/***/ 6219:
/*!****************************************************************************************!*\
  !*** ./src/app/components/administration/worker-register/worker-register.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerRegisterComponent": () => (/* binding */ WorkerRegisterComponent)
/* harmony export */ });
/* harmony import */ var _worker_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-register.component.html?ngResource */ 8439);
/* harmony import */ var _worker_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-register.component.scss?ngResource */ 9333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var src_app_common_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/authService/auth.service */ 1057);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 6747);
/* harmony import */ var src_app_common_api_team_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/api/team/team.service */ 9494);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let WorkerRegisterComponent = class WorkerRegisterComponent {
    constructor(authService, teamSvc, router, _snackBar) {
        this.authService = authService;
        this.teamSvc = teamSvc;
        this.router = router;
        this._snackBar = _snackBar;
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.workerRegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('junior'),
            team: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
        });
    }
    ngOnInit() {
        this._subscription.add(this.teamSvc.getTeams().subscribe({
            next: (res) => {
                this.teams = res;
            }
        }));
    }
    register() {
        const user = { email: '' };
        user.name = this.workerRegisterForm.value.name;
        user.email = this.workerRegisterForm.value.email;
        user.password = this.workerRegisterForm.value.password;
        user.role = this.workerRegisterForm.value.role;
        user.team_fk = this.workerRegisterForm.value.team;
        console.log(user);
        this._subscription.add(this.authService.register(user).subscribe({
            next: (r) => {
                this._snackBar.open('User registered successfully', '', {
                    ...src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.snackbarConfig,
                    panelClass: ['green-snackbar'],
                });
                this.router.navigateByUrl('/admin');
            },
            error: (e) => {
                this._snackBar.open(e.error.message, '', {
                    ...src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.snackbarConfig,
                    panelClass: ['red-snackbar'],
                });
            },
        }));
    }
    ngDestroy() {
        this._subscription.unsubscribe();
    }
};
WorkerRegisterComponent.ctorParameters = () => [
    { type: src_app_common_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_common_api_team_team_service__WEBPACK_IMPORTED_MODULE_4__.TeamService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar }
];
WorkerRegisterComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'shift-register',
        template: _worker_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_worker_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WorkerRegisterComponent);



/***/ }),

/***/ 9678:
/*!**********************************************************************************!*\
  !*** ./src/app/components/calendar/calendar-detail/calendar-detail.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDetailComponent": () => (/* binding */ CalendarDetailComponent)
/* harmony export */ });
/* harmony import */ var _calendar_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-detail.component.html?ngResource */ 4689);
/* harmony import */ var _calendar_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-detail.component.scss?ngResource */ 3303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_api_shift_shift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/api/shift/shift.service */ 4408);
/* harmony import */ var _common_api_error_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api/error/error.service */ 5355);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.module */ 6747);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let CalendarDetailComponent = class CalendarDetailComponent {
    constructor(_activatedRoute, _router, shiftService, errorService, _snackBar) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.shiftService = shiftService;
        this.errorService = errorService;
        this._snackBar = _snackBar;
        this.availableDoctorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            doctor: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
    }
    ngOnInit() {
        this.getDay();
    }
    getDay() {
        this._activatedRoute.params.subscribe((params) => {
            this.shiftService.getDay(params['id']).subscribe((day) => {
                this.day = day;
            });
        });
    }
    goBack() {
        this._router.navigateByUrl('/calendar');
    }
    getAvailableDoctors(error, role) {
        this.doctorWithErrors = {
            id: error.doctorId,
            role: role,
            errorId: error.id,
        };
        error.role = role;
        this.errorService.getAvailableDoctors(error).subscribe((res) => {
            this.availableDoctors = res;
        });
    }
    replaceDoctor() {
        this.errorService
            .replaceDoctors(this.doctorWithErrors, this.availableDoctorForm.get('doctor').value)
            .subscribe((res) => {
            this._snackBar.open(res.message, '', {
                ...src_app_app_module__WEBPACK_IMPORTED_MODULE_4__.snackbarConfig,
                panelClass: ['green-snackbar'],
            });
            this.availableDoctors = [];
            this.getDay();
        }, (res) => {
            this._snackBar.open(res.message, '', {
                ...src_app_app_module__WEBPACK_IMPORTED_MODULE_4__.snackbarConfig,
                panelClass: ['red-snackbar'],
            });
        });
    }
};
CalendarDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _common_api_shift_shift_service__WEBPACK_IMPORTED_MODULE_2__.ShiftService },
    { type: _common_api_error_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar }
];
CalendarDetailComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'shift-calendar-detail',
        template: _calendar_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_calendar_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalendarDetailComponent);



/***/ }),

/***/ 3373:
/*!***********************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _calendar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.component.html?ngResource */ 9253);
/* harmony import */ var _calendar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.component.scss?ngResource */ 5917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_api_shift_shift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/api/shift/shift.service */ 4408);
/* harmony import */ var _common_api_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/api/user/user.service */ 695);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! luxon */ 9527);
/* harmony import */ var _common_api_error_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/api/error/error.service */ 5355);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _libs_exportCSV_exportCSV__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/exportCSV/exportCSV */ 551);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _login_login_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.state */ 5110);
/* harmony import */ var _common_model_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/model/user */ 1743);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let CalendarComponent = class CalendarComponent {
    constructor(shiftService, userService, errorService, _router, exportService) {
        this.shiftService = shiftService;
        this.userService = userService;
        this.errorService = errorService;
        this._router = _router;
        this.exportService = exportService;
        this._auth = null;
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            height: 600,
        };
    }
    ngOnInit() {
        this._subscription.add(this._authState.subscribe((s) => (this._auth = s)));
    }
    ngAfterViewInit() {
        this.calendarApi = this.calendarComponent.getApi();
        this.setCalendarOptions();
        this._subscription.add(this.shiftService.getCalendar().subscribe((calendarEvents) => {
            this.setEvents(calendarEvents);
        }));
    }
    exportToCSV() {
        const events = this.calendarOptions.events;
        this.exportService.exportToCsv('ShiftUs-Calendar.csv', events);
    }
    setEvents(events) {
        this.calendarOptions.events = events.map((event) => {
            const splitShift = event.date.split(' ');
            // console.log(`${event.id} - ${event.senior.name} - ${event.junior.name}`);
            return {
                id: event.id,
                title: this.setTitle(event),
                date: luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.fromISO(splitShift[0]).toFormat('yyyy-MM-dd'),
                allDay: true,
                display: 'background',
                backgroundColor: this.setBackgroundColor(event),
                url: `calendar/detail/${event.id}`,
            };
        });
    }
    setTitle(event) {
        let title = ``;
        if (event.senior) {
            title += `${event.senior.name} - `;
        }
        else {
            title += 'SeniorEmpty - ';
        }
        if (event.junior) {
            title += event.junior.name;
        }
        else {
            title += 'JuniorEmpty';
        }
        return title;
    }
    setBackgroundColor(event) {
        let color = '#ffffff';
        if ((event.seniorErrors.length > 0 || event.juniorErrors.length > 0) &&
            this._auth.currentUser.role === _common_model_user__WEBPACK_IMPORTED_MODULE_8__.InternRoleEnum.administrator) {
            color = '#FF0000';
        }
        return color;
    }
    setCalendarOptions() {
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            height: 600,
            eventClick: (info) => {
                if (info.event.backgroundColor === '#FF0000' &&
                    this._auth.currentUser.role === _common_model_user__WEBPACK_IMPORTED_MODULE_8__.InternRoleEnum.administrator) {
                    this._router.navigateByUrl(info.event.url);
                }
            },
        };
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
};
CalendarComponent.ctorParameters = () => [
    { type: _common_api_shift_shift_service__WEBPACK_IMPORTED_MODULE_2__.ShiftService },
    { type: _common_api_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _common_api_error_error_service__WEBPACK_IMPORTED_MODULE_4__.ErrorService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _libs_exportCSV_exportCSV__WEBPACK_IMPORTED_MODULE_5__.ExportCSVService }
];
CalendarComponent.propDecorators = {
    calendarComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['fc',] }]
};
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Select)(_login_login_state__WEBPACK_IMPORTED_MODULE_7__.LoginState)
], CalendarComponent.prototype, "_authState", void 0);
CalendarComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'shifter-calendar',
        template: _calendar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_calendar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalendarComponent);



/***/ }),

/***/ 9520:
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component.html?ngResource */ 5212);
/* harmony import */ var _layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component.scss?ngResource */ 4848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/authService/auth.service */ 1057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _login_login_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.state */ 5110);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6078);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let LayoutComponent = class LayoutComponent {
    constructor(authSvc, store, router) {
        this.authSvc = authSvc;
        this.store = store;
        this.router = router;
        this._auth = null;
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    }
    ngOnInit() {
        this._subscription.add(this._authState.subscribe((s) => (this._auth = s)));
    }
    doLogout() {
        this.store.dispatch(new _login_login_state__WEBPACK_IMPORTED_MODULE_4__.Logout(this._auth.currentUser)).subscribe((res) => {
            this.router.navigateByUrl('/login');
            this.authSvc.logged = false;
        }, (error) => {
            this.error = error.error;
        });
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _common_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_login_login_state__WEBPACK_IMPORTED_MODULE_4__.LoginState)
], LayoutComponent.prototype, "_authState", void 0);
LayoutComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'shift-layout',
        template: _layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LayoutComponent);



/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 4437);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 9436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/authService/auth.service */ 1057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _login_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.state */ 5110);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let LoginComponent = class LoginComponent {
    constructor(authService, router, store, _snackBar) {
        this.authService = authService;
        this.router = router;
        this.store = store;
        this._snackBar = _snackBar;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    }
    ngOnInit() { }
    doLogin() {
        const credentials = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
        };
        this._subscription.add(this.store.dispatch(new _login_state__WEBPACK_IMPORTED_MODULE_4__.Login(credentials)).subscribe((res) => {
            this.error = null;
            this.authService.logged = true;
            this.router.navigateByUrl('/calendar');
        }, (error) => {
            this.error = error.error.message;
        }));
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _common_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar }
];
LoginComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'shift-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 5110:
/*!*************************************************!*\
  !*** ./src/app/components/login/login.state.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT": () => (/* binding */ DEFAULT),
/* harmony export */   "Login": () => (/* binding */ Login),
/* harmony export */   "LoginState": () => (/* binding */ LoginState),
/* harmony export */   "Logout": () => (/* binding */ Logout),
/* harmony export */   "Register": () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/authService/auth.service */ 1057);
/* harmony import */ var _libs_state_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/state/state */ 5647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9337);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const prefix = (action) => {
    return 'LoginState: ' + action;
};
class Login {
    constructor(credentials) {
        this.credentials = credentials;
    }
}
Login.type = prefix('Log In');
class Logout {
    constructor(user) {
        this.user = user;
    }
}
Logout.type = prefix('Log out');
class Register {
    constructor(user) {
        this.user = user;
    }
}
Register.type = prefix('Register');
const DEFAULT = {
    currentUser: {
        id: '',
        name: '',
        email: '',
        role: null,
        team_fk: ''
    },
    api_token: '',
};
let LoginState = class LoginState {
    constructor(authSvc) {
        this.authSvc = authSvc;
    }
    login(ctx, action) {
        return this.authSvc.login(action.credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((res) => (0,_libs_state_state__WEBPACK_IMPORTED_MODULE_2__.update)(ctx, (draft) => {
            draft.currentUser = res;
            // draft.api_token = `?api_token=${res.api_token}`;
        })));
    }
    logout(ctx, action) {
        // Observable<any> {
        // return this.authSvc.logout(action.user)
        //   .pipe(
        //     tap(
        //       (res =>
        (0,_libs_state_state__WEBPACK_IMPORTED_MODULE_2__.update)(ctx, (draft) => {
            draft.currentUser = null;
            draft.api_token = '';
        });
        // )
        // )
        // );
    }
    register(ctx, action) {
        return this.authSvc.register(action.user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((res) => (0,_libs_state_state__WEBPACK_IMPORTED_MODULE_2__.update)(ctx, (draft) => {
            draft.currentUser = res.user;
            draft.api_token = `?api_token=${res.user.api_token}`;
        })));
    }
};
LoginState.ctorParameters = () => [
    { type: _common_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(Login)
], LoginState.prototype, "login", null);
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(Logout)
], LoginState.prototype, "logout", null);
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(Register)
], LoginState.prototype, "register", null);
LoginState = __decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'auth',
        defaults: DEFAULT,
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], LoginState);



/***/ }),

/***/ 3581:
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _page_not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component.html?ngResource */ 8155);
/* harmony import */ var _page_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.component.scss?ngResource */ 8825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
PageNotFoundComponent.ctorParameters = () => [];
PageNotFoundComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'shift-page-not-found',
        template: _page_not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageNotFoundComponent);



/***/ }),

/***/ 9689:
/*!****************************************************************************!*\
  !*** ./src/app/components/worker/worker-detail/worker-detail.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerDetailComponent": () => (/* binding */ WorkerDetailComponent)
/* harmony export */ });
/* harmony import */ var _worker_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-detail.component.html?ngResource */ 6199);
/* harmony import */ var _worker_detail_components_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-detail.components.scss?ngResource */ 620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_api_shift_shift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/api/shift/shift.service */ 4408);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_api_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api/user/user.service */ 695);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _login_login_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../login/login.state */ 5110);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! luxon */ 9527);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_api_dayoff_dayoff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/api/dayoff/dayoff.service */ 9569);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.module */ 6747);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let WorkerDetailComponent = class WorkerDetailComponent {
    constructor(_router, shiftSvc, userSvc, dayoffSvc, _snackBar) {
        this._router = _router;
        this.shiftSvc = shiftSvc;
        this.userSvc = userSvc;
        this.dayoffSvc = dayoffSvc;
        this._snackBar = _snackBar;
        this._auth = null;
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        this.roles = ['senior', 'junior'];
        this.workerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
        });
        this.selectedDaysPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    ngOnInit() {
        this._subscription.add(this._authState.subscribe((s) => (this._auth = s)));
        this.userSvc.getUser(this._auth.currentUser.id).subscribe((user) => {
            this.workerForm.patchValue({
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role,
            });
        });
        this.dayoffSvc
            .getDayoffByUserId(this._auth.currentUser.id)
            .subscribe((dayoffs) => {
            this.calendarOptions.events = dayoffs.map((dayoff) => {
                const splitDayoff = dayoff.date.split(' ');
                this.countSelectedDaysPerMonth(luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.fromISO(splitDayoff[0]).month);
                return {
                    id: luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.fromISO(splitDayoff[0]).toFormat('y-LL-dd').toString(),
                    title: 'Selected',
                    date: luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.fromISO(splitDayoff[0])
                        .toFormat('y-LL-dd')
                        .toString(),
                    allDay: true,
                    display: 'background',
                };
            });
        });
        this.setCalendarOptions();
    }
    ngAfterViewInit() {
        this.calendarApi = this.calendarComponent.getApi();
    }
    selectDay(arg) {
        const event = this.calendarApi.getEventById(arg.dateStr);
        const events = this.calendarApi.getEvents();
        if (event !== null) {
            event.remove();
            this.decreaseSelectedDaysPerMonth(luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.fromISO(arg.dateStr).month);
        }
        else {
            const month = luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.fromISO(arg.dateStr).month;
            if (this.getSelectedDaysPerMonth(month) < 3 &&
                this.isAvailableDay(arg.date)) {
                this.calendarApi.addEvent({
                    id: luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.fromISO(arg.dateStr).toFormat('y-LL-dd').toString(),
                    title: 'Selected',
                    date: luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.fromISO(arg.dateStr).toFormat('y-LL-dd').toString(),
                    allDay: true,
                    display: 'background',
                });
                this.countSelectedDaysPerMonth(luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.fromISO(arg.dateStr).month);
            }
            else {
                this._snackBar.open('Not available Day or Max selected days reached', '', {
                    ...src_app_app_module__WEBPACK_IMPORTED_MODULE_7__.snackbarConfig,
                    panelClass: ['yellow-snackbar'],
                });
            }
        }
    }
    saveWorker() {
        const user = {
            id: this._auth.currentUser.id,
            name: this.workerForm.get('name').value,
            email: this.workerForm.get('email').value,
            role: this.workerForm.get('role').value,
        };
        this._subscription.add(this.userSvc.updateUser(user).subscribe((res) => {
            this._snackBar.open('User updated successfully', '', {
                ...src_app_app_module__WEBPACK_IMPORTED_MODULE_7__.snackbarConfig,
                panelClass: ['green-snackbar'],
            });
            this._router.navigateByUrl('/calendar');
        }, (res) => {
            this._snackBar.open('Error - User cannot be updated. Please, try again', '', {
                ...src_app_app_module__WEBPACK_IMPORTED_MODULE_7__.snackbarConfig,
                panelClass: ['red-snackbar'],
            });
        }));
    }
    saveDays() {
        const days = [];
        for (const day of this.calendarApi.getEvents()) {
            days.push(day.startStr);
        }
        this._subscription.add(this.dayoffSvc.saveDayoffs(this._auth.currentUser.id, days).subscribe((res) => {
            this._snackBar.open('Selected days stored successfully', '', {
                ...src_app_app_module__WEBPACK_IMPORTED_MODULE_7__.snackbarConfig,
                panelClass: ['green-snackbar'],
            });
            this._router.navigateByUrl('/calendar');
        }, (res) => {
            this._snackBar.open('Error - Days cannot be stored. Please, try again', '', {
                ...src_app_app_module__WEBPACK_IMPORTED_MODULE_7__.snackbarConfig,
                panelClass: ['red-snackbar'],
            });
        }));
    }
    getSelectedDaysPerMonth(month) {
        return this.selectedDaysPerMonth[month];
    }
    countSelectedDaysPerMonth(month) {
        this.selectedDaysPerMonth[month]++;
    }
    decreaseSelectedDaysPerMonth(month) {
        this.selectedDaysPerMonth[month]--;
    }
    setCalendarOptions() {
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            height: 600,
            dateClick: this.selectDay.bind(this)
        };
    }
    isAvailableDay(day) {
        return day >= Date.now();
    }
    selectTab(event) {
        if (event.index === 1) {
            this.calendarApi.render();
        }
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
};
WorkerDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _common_api_shift_shift_service__WEBPACK_IMPORTED_MODULE_2__.ShiftService },
    { type: _common_api_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _common_api_dayoff_dayoff_service__WEBPACK_IMPORTED_MODULE_6__.DayoffService },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar }
];
WorkerDetailComponent.propDecorators = {
    calendarComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['fc',] }]
};
__decorate([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Select)(_login_login_state__WEBPACK_IMPORTED_MODULE_5__.LoginState)
], WorkerDetailComponent.prototype, "_authState", void 0);
WorkerDetailComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'shifter-worker-detail',
        template: _worker_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewEncapsulation.None,
        styles: [_worker_detail_components_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WorkerDetailComponent);



/***/ }),

/***/ 551:
/*!*********************************************!*\
  !*** ./src/app/libs/exportCSV/exportCSV.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportCSVService": () => (/* binding */ ExportCSVService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ExportCSVService = class ExportCSVService {
    exportToCsv(filename, rows) {
        if (!rows || !rows.length) {
            return;
        }
        const separator = ',';
        const keys = Object.keys(rows[0]);
        const csvContent = keys.join(separator) +
            '\n' +
            rows
                .map((row) => {
                return keys
                    .map((k) => {
                    let cell = row[k] === null || row[k] === undefined ? '' : row[k];
                    cell =
                        cell instanceof Date
                            ? cell.toLocaleString()
                            : cell.toString().replace(/"/g, '""');
                    if (cell.search(/("|,|\n)/g) >= 0) {
                        cell = `"${cell}"`;
                    }
                    return cell;
                })
                    .join(separator);
            })
                .join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        // TODO check this msSaveBlob function
        // if (navigator.msSaveBlob) { // IE 10+
        //   navigator.msSaveBlob(blob, filename);
        // } else {
        const link = document.createElement('a');
        if (link.download !== undefined) {
            // Browsers that support HTML5 download attribute
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        // }
    }
};
ExportCSVService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root',
    })
], ExportCSVService);



/***/ }),

/***/ 5647:
/*!*************************************!*\
  !*** ./src/app/libs/state/state.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Produce": () => (/* binding */ Produce),
/* harmony export */   "ProduceAction": () => (/* binding */ ProduceAction),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ 2736);


/**
 * Sort cut function allow to update NGXS state using immer.js
 * @param ctx NGXS State context
 * @param callback where make changes of the estate
 *
 * Usage example:
 *
 * update(ctx, draft => {
 *   // Place where update state
 *   draft.stateProperty = 'newValue'
 * })
 */
const update = (ctx, callback) => {
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx.getState(), callback));
};
/**
 * Decorator used to update NGXS state using immer.js
 *
 * Usage example:
 *
 * @Action(NamedAction)
 * @Produce
 * namedAction(draft: StateModel, action: NamedAction, ctx: StateContext<any>){
 *   // Place where update state
 *   draft.stateProperty = 'newValue'
 * }
 *
 */
function Produce() {
    return (_target, _key, descriptor) => {
        const method = descriptor.value;
        descriptor.value = (ctx, action, ...args) => {
            update(ctx, (draft) => method.apply(this, [draft, action, ctx]));
        };
        return descriptor;
    };
}
/**
 * Joins NGXS Action decorator with Produce decorator
 *
 * Usage example:
 *
 * @ProduceAction(NamedAction)
 * namedAction(draft: StateModel, action: NamedAction, ctx: StateContext<any>){
 *   // Place where update state
 *   draft.stateProperty = 'newValue'
 * }
 *
 */
function ProduceAction(action, options) {
    return (target, name, descriptor) => {
        (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(action, options)(target, name, descriptor);
        return Produce()(null, null, descriptor);
    };
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // api_url: 'http://localhost:3000',
    api_url: 'https://web-production-2b1f.up.railway.app',
    credentials: {
        email: 'admin@shiftus.com',
        password: 'shiftus',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 9756:
/*!************************************************************************************!*\
  !*** ./src/app/components/administration/administration.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 9333:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/administration/worker-register/worker-register.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = ".register-form {\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n  height: 100%;\n}\n.register-form .center {\n  align-items: center;\n}\n.register-form .form-signin {\n  width: 100%;\n  max-width: 500px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.register-form .form-signin i {\n  font-size: 120px;\n  color: #2b6cb0;\n}\n.register-form .form-signin .checkbox {\n  font-weight: 400;\n}\n.register-form .form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.register-form .form-signin .form-control:focus {\n  z-index: 2;\n}\n.register-form .form-signin button {\n  background-color: #2b6cb0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkNUVztFRFVYLFlBQUE7QUFERjtBQUdFO0VBQ0UsbUJBQUE7QUFESjtBQUlFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFGSjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxjQzdCUztBRDJCZjtBQUtJO0VBQ0UsZ0JBQUE7QUFITjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUpOO0FBTU07RUFDRSxVQUFBO0FBSlI7QUFRSTtFQUNFLHlCQ2pEUztBRDJDZiIsImZpbGUiOiJ3b3JrZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvY29sb3JzJztcclxuXHJcbi5yZWdpc3Rlci1mb3JtIHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktaW5mbztcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tib3gge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWluZm87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWluZm86ICMyYjZjYjA7XHJcbiRkYXJrLWluZm86ICMwMDQxN2Y7XHJcbiRsaWdodC1pbmZvOiAjNjQ5OWUxO1xyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG4kbGlnaHQtZ3JheTogI2Y1ZjVmNTtcclxuIl19 */";

/***/ }),

/***/ 3303:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/calendar/calendar-detail/calendar-detail.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 5917:
/*!************************************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 4848:
/*!********************************************************************!*\
  !*** ./src/app/components/layout/layout.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "mat-sidenav-container {\n  height: 100%;\n}\nmat-sidenav-container mat-sidenav {\n  background-color: #2b6cb0;\n  min-width: 200px;\n}\nmat-sidenav-container mat-sidenav .list-group-item {\n  background: #2b6cb0;\n  color: #fff;\n}\nmat-sidenav-container mat-sidenav .list-group-item:hover {\n  background: #6499e1;\n}\nmat-sidenav-container mat-sidenav .list-group-item.user-tile {\n  background: #00417f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQURGO0FBR0U7RUFDRSx5QkNOVztFRE9YLGdCQUFBO0FBREo7QUFHSTtFQUNFLG1CQ1ZTO0VEV1QsV0NQRTtBRE1SO0FBR007RUFDRSxtQkNaSztBRFdiO0FBSU07RUFDRSxtQkNqQkk7QURlWiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvY29sb3JzJztcclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1pbmZvO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuXHJcbiAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktaW5mbztcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRsaWdodC1pbmZvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnVzZXItdGlsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGRhcmstaW5mbztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1pbmZvOiAjMmI2Y2IwO1xyXG4kZGFyay1pbmZvOiAjMDA0MTdmO1xyXG4kbGlnaHQtaW5mbzogIzY0OTllMTtcclxuXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGxpZ2h0LWdyYXk6ICNmNWY1ZjU7XHJcbiJdfQ== */";

/***/ }),

/***/ 9436:
/*!******************************************************************!*\
  !*** ./src/app/components/login/login.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".login-form {\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n  height: 100%;\n}\n.login-form .form-login {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n  text-align: center;\n}\n.login-form .form-login i {\n  font-size: 120px;\n  color: #2b6cb0;\n}\n.login-form .form-login .checkbox {\n  font-weight: 400;\n}\n.login-form .form-login .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.login-form .form-login .form-control:focus {\n  z-index: 2;\n}\n.login-form .form-login input[type=email] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.login-form .form-login input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.login-form .form-login button {\n  background-color: #2b6cb0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFHRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUVBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJDVFc7RURVWCxZQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxjQzFCUztBRHlCZjtBQUlJO0VBQ0UsZ0JBQUE7QUFGTjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUhOO0FBS007RUFDRSxVQUFBO0FBSFI7QUFPSTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQUxOO0FBUUk7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFOTjtBQVNJO0VBQ0UseUJDMURTO0FEbURmIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2NvbG9ycyc7XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmZvcm0tbG9naW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktaW5mbztcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tib3gge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9J2VtYWlsJ10ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPSdwYXNzd29yZCddIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktaW5mbztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktaW5mbzogIzJiNmNiMDtcclxuJGRhcmstaW5mbzogIzAwNDE3ZjtcclxuJGxpZ2h0LWluZm86ICM2NDk5ZTE7XHJcblxyXG4kd2hpdGU6ICNmZmY7XHJcbiRsaWdodC1ncmF5OiAjZjVmNWY1O1xyXG4iXX0= */";

/***/ }),

/***/ 8825:
/*!************************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 620:
/*!******************************************************************************************!*\
  !*** ./src/app/components/worker/worker-detail/worker-detail.components.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "shifter-worker-detail {\n  margin: 25px;\n}\nshifter-worker-detail .mat-tab-header {\n  margin: 5px;\n}\nshifter-worker-detail .mat-tab-label-active {\n  background-color: #2b6cb0;\n  border-radius: 5px;\n  margin-bottom: 3px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1kZXRhaWwuY29tcG9uZW50cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0FBREo7QUFJRTtFQUNFLHlCQ1ZXO0VEV1gsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdDVEk7QURPUiIsImZpbGUiOiJ3b3JrZXItZGV0YWlsLmNvbXBvbmVudHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9jb2xvcnMuc2Nzcyc7XHJcblxyXG5zaGlmdGVyLXdvcmtlci1kZXRhaWwge1xyXG4gIG1hcmdpbjogMjVweDtcclxuXHJcbiAgLm1hdC10YWItaGVhZGVyIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWluZm87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1pbmZvOiAjMmI2Y2IwO1xyXG4kZGFyay1pbmZvOiAjMDA0MTdmO1xyXG4kbGlnaHQtaW5mbzogIzY0OTllMTtcclxuXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGxpZ2h0LWdyYXk6ICNmNWY1ZjU7XHJcbiJdfQ== */";

/***/ }),

/***/ 6945:
/*!************************************************************************************!*\
  !*** ./src/app/components/administration/administration.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"page h-100\">\r\n  <div class=\"page-inner\">\r\n    <header class=\"page-title\">\r\n      <h2 class=\"page-title-bar\">Administration</h2>\r\n    </header>\r\n    <div class=\"page-section\">\r\n      <div class=\"card card-fluid m-1\">\r\n        <div class=\"card-header\">Automatic Shift creation - Choose a month</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group\">\r\n            <form [formGroup]=\"adminForm\">\r\n              <select class=\"custom-select\" id=\"month\" formControlName=\"month\">\r\n                <option\r\n                  *ngFor=\"let month of months; let i = index\"\r\n                  [value]=\"i + 1\"\r\n                >\r\n                  {{ month }}\r\n                </option>\r\n              </select>\r\n            </form>\r\n            <button\r\n              class=\"btn btn-primary mt-3 float-right\"\r\n              type=\"submit\"\r\n              (click)=\"createShifts()\"\r\n            >\r\n              Create shifts\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card card-fluid m-1 mt-3\">\r\n        <div class=\"card-header\">Sign in new worker</div>\r\n        <div class=\"card-body\">\r\n          <button\r\n            class=\"btn btn-primary float-right\"\r\n            type=\"submit\"\r\n            [routerLink]=\"'register'\"\r\n          >\r\n            Register new worker\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card card-fluid m-1 mt-3\">\r\n        <div class=\"card-header\">Registered Doctors: {{ doctors.length }}</div>\r\n        <div class=\"card-body\">\r\n          <table mat-table [dataSource]=\"doctors\" class=\"mat-elevation-z8\">\r\n            <ng-container matColumnDef=\"name\">\r\n              <th mat-header-cell *matHeaderCellDef>Name</th>\r\n              <td mat-cell *matCellDef=\"let doctor\">{{ doctor.name }}</td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"email\">\r\n              <th mat-header-cell *matHeaderCellDef>Email</th>\r\n              <td mat-cell *matCellDef=\"let doctor\">{{ doctor.email }}</td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"role\">\r\n              <th mat-header-cell *matHeaderCellDef>Role</th>\r\n              <td mat-cell *matCellDef=\"let doctor\">{{ doctor.role }}</td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"edit\">\r\n              <th mat-header-cell *matHeaderCellDef>Edit</th>\r\n              <td mat-cell *matCellDef=\"let doctor\">\r\n                <button class=\"btn btn-warning\" (click)=\"editUser(doctor.id)\">\r\n                  Edit\r\n                </button>\r\n              </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"delete\">\r\n              <th mat-header-cell *matHeaderCellDef>Delete</th>\r\n              <td mat-cell *matCellDef=\"let doctor\">\r\n                <button class=\"btn btn-danger\" (click)=\"deleteUser(doctor.id)\">\r\n                  Delete\r\n                </button>\r\n              </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 8439:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/administration/worker-register/worker-register.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"page h-100\">\r\n  <div class=\"page-inner\">\r\n    <header class=\"page-title\">\r\n      <h2 class=\"page-title-bar\">Worker Calendar</h2>\r\n    </header>\r\n    <div class=\"page-section\">\r\n      <div class=\"card card-fluid m-1\">\r\n        <div class=\"card-header\">Data</div>\r\n        <div class=\"card-body\">\r\n          <form class=\"form-group\" [formGroup]=\"workerRegisterForm\">\r\n            <div class=\"form-group\">\r\n              <label class=\"d-block\">Name</label>\r\n              <input class=\"form-control\" matInput formControlName=\"name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"d-block\">Email</label>\r\n              <input\r\n                class=\"form-control\"\r\n                matInput\r\n                type=\"email\"\r\n                formControlName=\"email\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"d-block\">Password</label>\r\n              <input\r\n                class=\"form-control\"\r\n                matInput\r\n                type=\"email\"\r\n                formControlName=\"password\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"d-block\">Team</label>\r\n              <select\r\n                class=\"form-control\"\r\n                matInput                \r\n                type=\"select\"\r\n                formControlName=\"team\"\r\n              >\r\n                <option *ngFor=\"let team of teams\" value=\"{{team.id}}\">{{team.name}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"d-block\">Role</label>\r\n              <div class=\"custom-control custom-control-inline custom-radio\">\r\n                <input\r\n                  id=\"senior\"\r\n                  type=\"radio\"\r\n                  class=\"custom-control-input\"\r\n                  name=\"role\"\r\n                  value=\"senior\"\r\n                  formControlName=\"role\"\r\n                />\r\n                <label for=\"senior\" class=\"custom-control-label\">Senior</label>\r\n              </div>\r\n              <div class=\"custom-control custom-control-inline custom-radio\">\r\n                <input\r\n                  id=\"junior\"\r\n                  type=\"radio\"\r\n                  class=\"custom-control-input\"\r\n                  name=\"role\"\r\n                  value=\"junior\"\r\n                  formControlName=\"role\"\r\n                />\r\n                <label for=\"junior\" class=\"custom-control-label\">Junior</label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class=\"form-actions\">\r\n            <button\r\n              class=\"btn btn-primary mt-3 float-right\"\r\n              (click)=\"register()\"\r\n            >\r\n              Save changes\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 4689:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/calendar/calendar-detail/calendar-detail.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<!--<pre>{{day | json}}</pre>-->\r\n<div class=\"page h-100\">\r\n  <div class=\"page-inner table\">\r\n    <header class=\"page-title\">\r\n      <h2 class=\"page-title-bar\">\r\n        Day Detail - {{ day?.date | date : 'mediumDate' }}\r\n      </h2>\r\n    </header>\r\n    <div class=\"page-section row\">\r\n      <div class=\"card m-1\">\r\n        <div class=\"card-header text-capitalize\">\r\n          {{ day?.senior.role }} - {{ day?.senior.name }}\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div\r\n            *ngIf=\"day?.seniorErrors.length > 0\"\r\n            class=\"list-group list-group-bordered mb-3\"\r\n          >\r\n            <div\r\n              *ngFor=\"let error of day?.seniorErrors\"\r\n              class=\"list-group-item\"\r\n              (click)=\"getAvailableDoctors(error, 'senior')\"\r\n            >\r\n              <div class=\"list-group-item-figure\">\r\n                <span href=\"#\" class=\"tile tile-circle bg-warning\"\r\n                  ><i class=\"oi oi-chat\"></i\r\n                ></span>\r\n              </div>\r\n              <div class=\"list-group-item-body\">{{ error.name }}</div>\r\n            </div>           \r\n          </div>\r\n          <div *ngIf=\"day?.seniorErrors.length === 0\">No errors to display</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card m-1\">\r\n        <div class=\"card-header text-capitalize\">\r\n          {{ day?.junior.role }} - {{ day?.junior.name }}\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div\r\n            *ngIf=\"day?.juniorErrors.length > 0\"\r\n            class=\"list-group list-group-bordered mb-3\"\r\n          >\r\n            <div              \r\n              *ngFor=\"let error of day?.juniorErrors\"\r\n              class=\"list-group-item\"\r\n              (click)=\"getAvailableDoctors(error, 'junior')\"\r\n            >\r\n              <div class=\"list-group-item-figure\">\r\n                <span href=\"#\" class=\"tile tile-circle bg-warning\"\r\n                  ><i class=\"oi oi-chat\"></i\r\n                ></span>\r\n              </div>\r\n              <div class=\"list-group-item-body\">{{ error.name }}</div>\r\n            </div>\r\n          </div>          \r\n          <div *ngIf=\"day?.juniorErrors.length === 0\">No errors to display</div>            \r\n        </div>\r\n      </div>\r\n      <div class=\"card col-12\" *ngIf=\"availableDoctors?.length\">\r\n        <div class=\"card-header\">Available doctors</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"list-group list-group-bordered mb-3\">\r\n            <form [formGroup]=\"availableDoctorForm\">\r\n              <a\r\n                *ngFor=\"let doctor of availableDoctors\"\r\n                class=\"list-group-item list-group-item-action\"\r\n              >\r\n                <div class=\"list-group-item-body form-group\">\r\n                  <div class=\"custom-control custom-radio align-middle\">\r\n                    <input\r\n                      type=\"radio\"\r\n                      class=\"custom-control-input\"\r\n                      name=\"doctor\"\r\n                      formControlName=\"doctor\"\r\n                      [id]=\"doctor.id\"\r\n                      [value]=\"doctor.id\"\r\n                    />\r\n                    <label class=\"custom-control-label\" [for]=\"doctor.id\">{{\r\n                      doctor.name\r\n                    }}</label>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"card-footer-content\">\r\n            <div class=\"card-footer-item\">\r\n              <button\r\n                class=\"btn btn-primary\"\r\n                type=\"submit\"\r\n                (click)=\"replaceDoctor()\"\r\n              >\r\n                Replace\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-actions col-lg-12\">\r\n        <button class=\"btn btn-secondary mt-3 float-right\" (click)=\"goBack()\">\r\n          Back to Calendar\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 9253:
/*!************************************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"page h-100\">\r\n  <div class=\"page-inner\">\r\n    <header class=\"page-title\">\r\n      <h2 class=\"page-title-bar\">ShiftUs Calendar</h2>\r\n    </header>\r\n    <div class=\"page-section\">\r\n      <div class=\"card card-fluid m-1\">\r\n        <div class=\"card-body\">\r\n          <full-calendar #fc [options]=\"calendarOptions\"></full-calendar>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"card-footer-content\">\r\n            <div class=\"card-footer-item\">\r\n              <button class=\"btn btn-primary\" (click)=\"exportToCSV()\">\r\n                Export to CSV\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 5212:
/*!********************************************************************!*\
  !*** ./src/app/components/layout/layout.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav mode=\"side\" class=\"h-100\" opened>\r\n    <ul class=\"d-flex flex-column list-group align-items-start\">\r\n      <li class=\"list-group-item user-tile w-100\">\r\n        Welcome {{ _auth.currentUser?.name }}\r\n      </li>\r\n      <li class=\"list-group-item w-100\" [routerLink]=\"['/calendar']\">\r\n        <span class=\"align-middle\"\r\n          ><i class=\"far fa-calendar-alt mr-2\"></i></span\r\n        >Calendar\r\n      </li>\r\n      <li\r\n        class=\"list-group-item w-100\"\r\n        [routerLink]=\"['/worker', this._auth.currentUser.id]\"\r\n      >\r\n        <span class=\"align-middle\"><i class=\"fas fa-user mr-2\"></i></span>Worker\r\n        Detail\r\n      </li>\r\n      <li\r\n        class=\"list-group-item w-100\"\r\n        [hidden]=\"_auth.currentUser.role != 'admin'\"\r\n        [routerLink]=\"['/admin']\"\r\n      >\r\n        <span class=\"align-middle\"><i class=\"fas fa-cog mr-2\"></i></span\r\n        >Worker Administration\r\n      </li>\r\n      <li\r\n        class=\"list-group-item w-100\"\r\n        [hidden]=\"_auth.currentUser.role != 'admin'\"\r\n        [routerLink]=\"['/admin']\"\r\n      >\r\n        <span class=\"align-middle\"><i class=\"fas fa-cog mr-2\"></i></span\r\n        >Shift Administration\r\n      </li>\r\n      <li\r\n        class=\"list-group-item w-100\"\r\n        [hidden]=\"_auth.currentUser.role != 'admin'\"\r\n        [routerLink]=\"['/admin']\"\r\n      >\r\n        <span class=\"align-middle\"><i class=\"fas fa-cog mr-2\"></i></span\r\n        >Company and Team Administration\r\n      </li>\r\n      <li class=\"list-group-item w-100\" (click)=\"doLogout()\">\r\n        <span class=\"align-middle\"\r\n          ><i class=\"fas fa-sign-out-alt mr-2\"></i></span\r\n        >Logout\r\n      </li>\r\n    </ul>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n";

/***/ }),

/***/ 4437:
/*!******************************************************************!*\
  !*** ./src/app/components/login/login.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"login-form\">\r\n  <form class=\"form-login\" [formGroup]=\"loginForm\">\r\n    <i class=\"mb-4 fas fa-hospital-user\"></i>\r\n    <div\r\n      *ngIf=\"\r\n        (loginForm.controls.email.invalid &&\r\n          loginForm.controls.email.touched) ||\r\n        loginForm.controls.email.dirty\r\n      \"\r\n    >\r\n      <small\r\n        class=\"text-danger\"\r\n        *ngIf=\"loginForm.controls.email.errors?.required\"\r\n        >Email is required</small\r\n      >\r\n      <small\r\n        class=\"text-danger\"\r\n        *ngIf=\"loginForm.controls.email.errors?.pattern\"\r\n        >Please enter a valid email</small\r\n      >\r\n    </div>\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n    <input\r\n      type=\"email\"\r\n      [class.is-invalid]=\"\r\n        loginForm.controls.email.invalid && loginForm.controls.email.touched\r\n      \"\r\n      formControlName=\"email\"\r\n      id=\"inputEmail\"\r\n      class=\"form-control\"\r\n      placeholder=\"Email address\"\r\n      required\r\n      autofocus=\"\"\r\n    />\r\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n    <input\r\n      type=\"password\"\r\n      [class.is-invalid]=\"\r\n        loginForm.controls.password.invalid &&\r\n        loginForm.controls.password.touched\r\n      \"\r\n      formControlName=\"password\"\r\n      id=\"inputPassword\"\r\n      class=\"form-control\"\r\n      placeholder=\"Password\"\r\n      required=\"\"\r\n    />\r\n    <div\r\n      *ngIf=\"\r\n        (loginForm.controls.password.invalid &&\r\n          loginForm.controls.password.touched) ||\r\n        loginForm.controls.password.dirty\r\n      \"\r\n    >\r\n      <small\r\n        class=\"text-danger\"\r\n        *ngIf=\"loginForm.controls.password.errors?.required\"\r\n        >Password is required</small\r\n      >\r\n    </div>\r\n\r\n    <div *ngIf=\"error\" class=\"alert-danger mb-3 p-3\">{{ error }}</div>\r\n    <br />\r\n    <button\r\n      class=\"btn btn-lg btn-primary btn-block\"\r\n      (click)=\"doLogin()\"\r\n      type=\"submit\"\r\n    >\r\n      Log in\r\n    </button>\r\n    <hr />\r\n  </form>\r\n</div>\r\n";

/***/ }),

/***/ 8155:
/*!************************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<p>page-not-found works!</p>\r\n";

/***/ }),

/***/ 6199:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/worker/worker-detail/worker-detail.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"page h-100\">\r\n  <div class=\"page-inner\">\r\n    <header class=\"page-title\">\r\n      <h2 class=\"page-title-bar\">Worker Calendar</h2>\r\n    </header>\r\n    <div class=\"page-section\">\r\n      <mat-tab-group (selectedTabChange)=\"selectTab($event)\">\r\n        <mat-tab label=\"Worker Details\">\r\n          <div class=\"card card-fluid m-1\">\r\n            <div class=\"card-header\">Data</div>\r\n            <div class=\"card-body\">\r\n              <form class=\"form-group\" [formGroup]=\"workerForm\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"d-block\">Name</label>\r\n                  <input class=\"form-control\" matInput formControlName=\"name\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"d-block\">Email</label>\r\n                  <input\r\n                    class=\"form-control\"\r\n                    matInput\r\n                    type=\"email\"\r\n                    formControlName=\"email\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"d-block\">Role</label>\r\n                  <div\r\n                    class=\"custom-control custom-control-inline custom-radio\"\r\n                  >\r\n                    <input\r\n                      id=\"senior\"\r\n                      type=\"radio\"\r\n                      class=\"custom-control-input\"\r\n                      name=\"role\"\r\n                      value=\"senior\"\r\n                      formControlName=\"role\"\r\n                    />\r\n                    <label for=\"senior\" class=\"custom-control-label\"\r\n                      >Senior</label\r\n                    >\r\n                  </div>\r\n                  <div\r\n                    class=\"custom-control custom-control-inline custom-radio\"\r\n                  >\r\n                    <input\r\n                      id=\"junior\"\r\n                      type=\"radio\"\r\n                      class=\"custom-control-input\"\r\n                      name=\"role\"\r\n                      value=\"junior\"\r\n                      formControlName=\"role\"\r\n                    />\r\n                    <label for=\"junior\" class=\"custom-control-label\"\r\n                      >Junior</label\r\n                    >\r\n                  </div>\r\n                </div>\r\n              </form>\r\n              <div class=\"form-actions\">\r\n                <button\r\n                  class=\"btn btn-primary mt-3 float-right\"\r\n                  (click)=\"saveWorker()\"\r\n                >\r\n                  Save changes\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Shift selection\">\r\n          <div class=\"card card-fluid m-1\">\r\n            <div class=\"card-header\">Select up to 3 days to avoid Shifts</div>\r\n            <div class=\"card-body\">\r\n              <div class=\"tab-calendar-wrapper\">\r\n                <full-calendar #fc [options]=\"calendarOptions\"></full-calendar>\r\n              </div>\r\n              <div class=\"form-actions\">\r\n                <button\r\n                  class=\"btn btn-primary mt-3 float-right\"\r\n                  (click)=\"saveDays()\"\r\n                >\r\n                  Save selection\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map