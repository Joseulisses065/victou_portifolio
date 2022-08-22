<?php
require __DIR__."/vendor/autoload.php";
use CoffeeCode\Router\Router;

$router = new Router(ROOT);

$router->namespace("Source\App");

$router->group(null);
$router->get("/","Web:home");
$router->get("/home","Web:home");
$router->get("/contato","Web:contato");


$router->group("ops");
$router->get("/{errcode}","Web:error");


$router->dispatch();

if($router->error()){
    $router->redirect("/ops/{$router->error()}");
}