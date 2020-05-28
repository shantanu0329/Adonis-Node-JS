// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
'use strict';

export default class HomeController {
	index ({view}) {
   	return view.render('home')

  	}

  	about ({view}) {
   	return view.render('about')

  	}

  	contact ({view}) {
   	return view.render('contactus')

  	}

  	gallery ({view}) {
   	return view.render('gallery')

  	}
}
