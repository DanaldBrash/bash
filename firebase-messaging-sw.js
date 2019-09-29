importScripts('https://www.gstatic.com/firebasejs/3.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.2/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '814151560552'
});

const messaging = firebase.messaging();

/*
this.sendLD = function() { //date.getHours() + ':'  +  //body: 'text=' + date.getMinutes() + ':' + date.getSeconds() + '&variable=123'
	//var d = new Date();
	//var m = d.getMinutes();
	//var s = date.getSeconds();
	var str = "88888"; //m + ':' + s;
	
	//console.log(str); 
	
	//https://habr.com/ru/post/252941/
	fetch("https://job.eu5.org/mod/index.php", {
			method: 'post',  
			headers: {  
			  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
			},  
			body: 'text=' + str + '&variable=123'
		})
		.then(function(res) {
			//console.log('Gut_8'); 
	});
	
	var currentTime = new Date().getTime(), seconds = 360; //360s = 6' //600s = 10'
	while (currentTime + (seconds * 1000) >= new Date().getTime()) {
		//Задердка через запрос к странице с задержкой (20 секунд)
		fetch("https://job.eu5.org/sleep.php?s=25");
    }
};
*/




// Customize notification handler
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Handling background message', payload); /////////////////////Потом убрать!

  // Copy data object to get parameters in the click handler
  payload.data.data = JSON.parse(JSON.stringify(payload.data)); ////////////////////////Возможно надо оставить это, если что-то не будет работать...

  
	
	var str = "77777"; //m + ':' + s;
	
	fetch("https://www.job.eu5.org/mod/set.php?d=" + str).then(function(res) {
		console.log('Gut'); 
	});
	
/*	
	fetch("https://job.eu5.org/mod/set.php", {
			method: 'post',  
			headers: {  
			  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
			},  
			body: 'text=' + str + '&variable=123'
		})
		.then(function(res) {
			console.log('Zeit 2'); /////////////////////Потом убрать!
			//console.log('Gut_8'); 
	});
*/	
	
/*
   	fetch("https://job.eu5.org/mod/set.php", { //event.waitUntil( //"Content-type": "application/x-www-form-urlencoded; charset=UTF-8" //; charset=UTF-8
			method: 'post',  
			headers: {  
			  "Content-type": "text/html"  
			},  
			body: 'text=' + str + '&variable=456'
		}).then(function(res) {
			//console.log('Gut_5 ' + res); /////////////////////Потом убрать!
			
			
	//		const pre_ = async () => {
	//			return new Promise(resolve => setTimeout(resolve, 5000));
	//			
	//			//const cache = await caches.open('static-v1');
	//			//return cache.addAll([
	//			//	'/',
	//			//	'/about/',
	//			//	'/static/styles.css'
	//			//]);
	//		};
			
	//		event.waitUntil(pre_());
			
			//return new Promise(resolve => setTimeout(resolve, 5000)); /////////////Возможно вызовет ошибку
			
			console.log('Zeit 1'); /////////////////////Потом убрать!
			
			
			//var currentTime = new Date().getTime(), seconds = 360; //360s = 6' //600s = 10'
			//while (currentTime + (seconds * 1000) >= new Date().getTime()) {
			//	//Задердка через запрос к странице с задержкой (15 секунд)
			//	//fetch("https://job.eu5.org/sleep.php?s=15");
			//}
			
			
			//return res; /////////////Возможно вызовет ошибку
	}); //)

*/	
	
	console.log('Zeit 2'); /////////////////////Потом убрать!
  
  
	return self.registration.showNotification(payload.data.title, payload.data);
});

self.addEventListener('notificationclick', function(event) {
  //const target = event.notification.data.click_action || '/';
  event.notification.close();

  /*
  // This looks to see if the current is already open and focuses if it is
  event.waitUntil(clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  }).then(function(clientList) {
    // clientList always is empty?!
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url === target && 'focus' in client) {
        return client.focus();
      }
    }

    return clients.openWindow(target);
  }));
  */
	
});





/*
// регистрируем свой обработчик уведомлений
messaging.setBackgroundMessageHandler(function(payload) {
    if (typeof payload.data.time != 'undefined') {
        var time = new Date(payload.data.time * 1000);
        var now = new Date();

        if (time < now) { // истек срок годности уведомления
            return null;
        }

        var diff = Math.round((time.getTime() - now.getTime()) / 1000);

        // показываем реальное время в уведомлении
        // будет сгенерировано сообщение вида: "Начало через 14 минут, в 21:00"
        payload.data.body = 'Начало через ' +
            Math.round(diff / 60) + ' минут, в ' + time.getHours() + ':' +
            (time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes())
        ;
    }

    // Сохраяем data для получения пареметров в обработчике клика
    payload.data.data = payload.data;

    //////////////////////////
    //this.sendLD();
  
	
	//var d = new Date();
	//var m = d.getMinutes();
	//var s = date.getSeconds();
	var str = "33333"; //m + ':' + s;
	
	//console.log(str); 
	
	//https://habr.com/ru/post/252941/
	fetch("https://job.eu5.org/mod/index.php", {
			method: 'post',  
			headers: {  
			  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
			},  
			body: 'text=' + str + '&variable=123'
		})
		.then(function(res) {
			//console.log('Gut_8'); 
	});
	var currentTime = new Date().getTime(), seconds = 360; //360s = 6' //600s = 10'
	while (currentTime + (seconds * 1000) >= new Date().getTime()) {
		//Задердка через запрос к странице с задержкой (15 секунд)
		fetch("https://job.eu5.org/sleep.php?s=15");
    	}
	
	
    // Показываем уведомление
    return self.registration.showNotification(payload.data.title, payload.data);
});

// свой обработчик клика по уведомлению
self.addEventListener('notificationclick', function(event) {
    // извлекаем адрес перехода из параметров уведомления 
    const target = event.notification.data.click_action || '/';
    event.notification.close();

    // этот код должен проверять список открытых вкладок и переключатся на открытую
    // вкладку с ссылкой если такая есть, иначе открывает новую вкладку
    event.waitUntil(clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    }).then(function(clientList) {
        // clientList почему-то всегда пуст!?
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == target && 'focus' in client) {
                return client.focus();
            }
        }

        // Открываем новое окно
        return clients.openWindow(target);
    }));
});

*/
