<?php

class User {

	private $id;
	private $name;
	private $age;
	private $email;

	public function __construct($obj){
		$this->id = $obj->id;
		$this->name = $obj->name;
		$this->age = $obj->age;
		$this->email = $obj->email;
	}

	public function getUserId(){
		return $this->id;
	}
	public function getUserName(){
		return $this->name;
	}

}



