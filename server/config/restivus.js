/**
 * @api {post} /login Login
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Authentication
 * @apiPermission none
 *
 * @apiDescription Login to use permission required api methods.
 * <br/>
 * curl:   curl -d "password=<password>&user=<email>" http://localhost:3000/api/login/
 *
 * @apiParam {String} password user password
 * @apiParam {String} user user email
 *
 * @apiSuccess {Boolean} success         
 * @apiSuccess {String} authToken         
 * @apiSuccess {String} userId         
 * @apiSuccessExample {json} Success-Response:
 *	HTTP/1.1 200 OK
 *	{"status":"success","data":{"authToken":"asfsadfas","userId":"werfsdfds"}}
 *
 * @apiError {Array} response [403,{"success":false,"message":"User not found"}]
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 403 Not Found
 *     [403,{"success":false,"message":"User not found"}]
 *
 *
 */

//curl -d "password=123456&user=st3ve.knoch@gmail.com" http://localhost:3000/api/login/
//{"authToken":"EvPo2vh4H0TGruOyikpD5qqKl5INzv9qj4aynkFqizs","userId":"pgz6Q4DEKgxRTxy36","success":true}
//curl -H "X-Auth-Token: EvPo2vh4H0TGruOyikpD5qqKl5INzv9qj4aynkFqizs" -H "X-User-Id: pgz6Q4DEKgxRTxy36" -d "type=1&market=BTCUSD&price=100.00&amount=1.00000001" http://localhost:3000/api/order/


// Global configuration
Restivus.configure({
	useAuth: true
});
