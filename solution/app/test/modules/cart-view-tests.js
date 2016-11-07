/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// jshint esversion: 6
import Cart from 'cart';
import CartView from 'cart-view';
import Product from 'product';

QUnit.module('Cart-view', {beforeEach: () => {
  let fixture = document.getElementById('qunit-fixture');
  fixture.innerHTML = window.__html__['cart-fixture'];
}});

QUnit.test('test environment is sane', assert => {
  let fixture = document.getElementById('qunit-fixture');
  assert.ok(fixture, 'qunit fixture exists');
  let cart = document.getElementById('cart');
  assert.ok(!cart.hasChildNodes(), 'cart template is empty');
  });

QUnit.test('empty cart adds no items', assert => {
  let table = document.getElementById('cart');
  let cart = new Cart();
  let cartView = new CartView(cart, 'cart');
  cartView.render();
  assert.ok(!table.hasChildNodes(), 'cart template is empty after render');
  });

QUnit.test('single item', assert => {
  let cart = new Cart();
  let c10 = new Product('C10', 'C10 Chair', 100.00, 'C10.jpg', 'PUT TEXT HERE');
  cart.add(c10);

  let view = new CartView(cart, 'cart');
  view.render();
  let table = document.getElementById('cart');
  let items = table.querySelectorAll(view.itemSelector);
  assert.equal(items.length, 1, 'number of items rendered');
  });

QUnit.test('two items', assert => {
  let cart = new Cart();
  let c10 = new Product('C10', 'C10 Chair', 100.00, 'C10.jpg', 'PUT TEXT HERE');
  let cl2 = new Product('Cl2', 'CL2 Chair', 100.00, 'Cl2.jpg', 'PUT TEXT HERE');
  cart.add(c10);
  cart.add(cl2);

  let view = new CartView(cart, 'cart');
  view.render();
  let table = document.getElementById('cart');
  let items = table.querySelectorAll(view.itemSelector);
  assert.equal(items.length, 2, 'number of items rendered');
  });