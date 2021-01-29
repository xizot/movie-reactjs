/*<![CDATA[*/
    (function () {
        $(document).ready(function() {
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          var renderInterval = null;
          var cartTemp = 0;
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
          }
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'lakotahouse.myshopify.com',
              storefrontAccessToken: '848a9df9bdf9997dc980e8e7cff9a587',
            });
            var $target = $('#product-component')
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: $target.data('id'),
                node: $target.get(0),
                moneyFormat: '%C2%A5%7B%7Bamount_no_decimals%7D%7D',
                options: {
                  "product": {
                    "iframe": false,
                    "contents": {
                      "img": false,
                      "title": false,
                      "price": false,
                      "quantity": false,
                      "quantityDecrement": false,
                      "quantityIncrement": false,
                      "quantityInput": true
                    },
                    "classes": {
                      buttonWrapper: "",
                      button: "ftype01 fsize01 btn-order",
                      options: "inner bgtype01",
                      quantity: "inner bgtype01",
                    },
                    "templates": {
                      button: '<ul class="{{data.classes.product.buttonWrapper}}">{{#data.buttonDisabled}}<li class="soldout" id="btn_sold_out"><div class="ftype01 fsize01">SOLD OUT</div></li>{{/data.buttonDisabled}}{{^data.buttonDisabled}}<li class="cart" id="btn_add_cart"><button class="{{data.classes.product.button}} {{data.buttonClass}}" type="button">{{data.buttonText}}</button></li>{{/data.buttonDisabled}}</ul>',
                      options: '{{#data.hasVariants}}<div class="{{data.classes.product.options}}"><dl class="type01 bgtype01 style01"><dt class="ftype01 color02">SELECT</dt><dd><select id="variant"></select></dd><dt class="ftype01 color02">QUANTITY</dt><dd>{{#data.contents.quantityDecrement}}<button class="{{data.classes.product.quantityButton}} {{data.classes.product.quantityDecrement}}" type="button" data-element="product.quantityDecrement"><span>-</span><span class="visuallyhidden">Decrement</span></button>{{/data.contents.quantityDecrement}}{{#data.contents.quantityInput}}<input class="{{data.classes.product.quantityInput}}" id="quantity-input" type="number" min="1" aria-label="Quantity" value="{{data.selectedQuantity}}" data-element="product.quantityInput">{{/data.contents.quantityInput}}{{#data.contents.quantityIncrement}}<button class="{{data.classes.product.quantityButton}} {{data.classes.product.quantityIncrement}}" type="button" data-element="product.quantityIncrement"><span>+</span><span class="visuallyhidden">Increment</span></button>{{/data.contents.quantityIncrement}}</dd></dl></div>{{/data.hasVariants}}',
                    },
                    "text": {
                      "button": "ORDER"
                    },
                    "events": {
                      'afterRender': function (component) {
                        var variants = component.model.variants;
                        var output = '';
                        variants.forEach(function(item) {
                          output += "<option value='" + item.title + "' data-selected='" + JSON.stringify(item.selectedOptions) + "'";
                          if(!item.available) output += ' disabled';
                          if(component.selectedVariant.title == item.title) output += ' selected';
                          output += ' >' + item.title;
                          if(!item.available) output += ' SOLD OUT';
                          output += '</option>';
                        })
                        $('#variant').html(output)
                        $('#variant').change(function(e) {
                          var target = e.target
                          , selected = JSON.parse(target.options[target.selectedIndex].getAttribute("data-selected"));
                          selected.forEach(function(item) {
                            component.updateVariant(item.name, item.value);
                          })
                          component.render();
                        })
                        
                        $('#quantity-input').attr('max', $target.data('limit'))
                        $('#quantity-input').change(function() {
                          var max = parseInt($(this).attr('max'));
                          var min = parseInt($(this).attr('min'));
                          if ($(this).val() > max)
                          {
                              $(this).val(max);
                          }
                          else if ($(this).val() < min)
                          {
                              $(this).val(min);
                          }       
                        }); 
                      }, // before component is rendered, after it has a `model` defined
                      addVariantToCart: function (product) {
                        setTimeout(function() {
                          window.location.href = '/cart';
                        }, 1000)
                      },
                    },
                  },
                  "cart": {
                    "events": {
                      'beforeRender': function (component) {
                        cartInit(component);
                      }, // before component is rendered, after it has a `model` defined
                    },
                  },
                },
              });
            });
          }
    
          function cartInit(component) {
            var target = $('#cart-component');
            var ouput = '';
            var variants = '';
            if(cartTemp !== component.lineItemCache.length) clearInterval(renderInterval);
            cartTemp = component.lineItemCache.length;
            if(target.length > 0) {
              if(component.lineItemCache.length > 0) {
                component.lineItemCache.forEach(function(item) {
                  var quantity = '';
                  for (let i = 1; i <= item.quantity; i++) {
                    quantity += '<option value="'+i+'" '+(i === item.quantity ? 'selected' : '')+'>'+i+'</option>'
                  }
                  variants += '<tr><td class="name"><a href="">'+item.title+(item.variant.title === 'Default Title' ? '' : '<br />'+item.variant.title)+'</a></td><td class="price">'+currencyFormat(item.variant.price)+'</td><td class="amount"><select class="variant-quantity" data-line-item-id="'+item.id+'">'+quantity+'</select></td><td class="other"><ul><li><a href="" class="variant-remove" data-line-item-id="'+item.id+'">削除</a></li></ul></td></tr>';
                })
                ouput = '<table border="1" cellpadding="0" cellspacing="0" id="shoppingcart" style="margin-bottom: 40px;"><thead><tr><th class="name">Product Name<span class="small">商品名</span></th><th class="price">Price<span class="small">価格(税込）</span></th><th class="amount">Quantity<span class="small">数量</span></th><th class="other">Delete<span class="small">変更</span></th></tr></thead><tbody>'+variants+'<tr><td colspan="3" class="right">Total / 合計 （Inc. Tax）</td><td><p class="totalprice fsize03">'+currencyFormat(component.model.totalPrice)+'</p></td></tr></tbody></table><table border="1" cellpadding="0" cellspacing="0" id="shoppingcart"><thead><tr><th class="name">Delivery Date<span class="small">ご希望配達日</span></th><th class="price">Delivery Time<span class="small">ご希望時間帯</span></th></tr></thead><tbody><tr><td><select id="date"></select></td><td><select id="time"><option selected disabled>選択してください</option><option value="08:00 - 12:00">08:00 - 12:00</option><option value="14:00 - 16:00">14:00 - 16:00</option><option value="16:00 - 18:00">16:00 - 18:00</option><option value="18:00 - 20:00">18:00 - 20:00</option><option value="19:00 - 21:00">19:00 - 21:00</option></select></td></tr></tbody></table><div class="clearfix" id="btn-set"><div class="tcenter fsize03 bold next"><a href="'+component.model.webUrl+'">Proceed to Checkout<span class="small">レジに進む</span></a></div><div class="tcenter fsize03 bold back"><a href="/">Continue Shopping<span class="small">買い物を続ける</span></a></div></div>';
              } else {
                ouput = '<p class="noresult-msg tcenter">現在、買い物かごには商品が入っていません。</p><div class="btn_mtc02"><a href="/" class="">Continue Shopping<span class="small">買い物を続ける</span></a></div>'
              }
              target.html(ouput);
              $('.variant-quantity').change(function() {
                setQuantity(component, this, parseInt($(this).val()))
              })
              $('.variant-remove').click(function(e) {
                e.preventDefault();
                setQuantity(component, this, 0);
                renderInterval = setInterval(function() {
                  component.view.render();
                }, 300);
              })
              
              Date.prototype.addDays = function(days) {
                var date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
              }
              
              var date = new Date();
              var dateHTML = '<option selected disabled>選択してください</option>';
              var cartAttributes = [];
              
              for (var i = 4; i <= 10; i++) {
                var newDate = date.addDays(i);
                var value = newDate.getFullYear() + '年' + (newDate.getMonth() + 1) + '月' + newDate.getDate() + '日';
                if(!(newDate.getDate() >= 2 && newDate.getDate() <= 4 && newDate.getMonth() == 0 && newDate.getFullYear() === 2021)){
                  dateHTML += '<option value="'+value+'">'+value+'</option>';
                }
              }
    
              $("#date").html(dateHTML);
              
              $("#date").change(function() {
                var obj = cartAttributes.find(function(x) {
                  return x.key === 'Date';
                });
                if(obj) {
                  obj.value = $(this).val();
                } else {
                  cartAttributes.push({
                    key: 'Date',
                    value: $(this).val()
                  })
                }
                console.log(cartAttributes);
                setAttributes();
              })
              
              $("#time").change(function() {
                var obj = cartAttributes.find(function(x) {
                  return x.key === 'Time';
                });
                if(obj) {
                  obj.value = $(this).val();
                } else {
                  cartAttributes.push({
                    key: 'Time',
                    value: $(this).val()
                  })
                }
                console.log(cartAttributes);
                setAttributes();
              })
    
              function setAttributes() {
                component.props.client.checkout.updateAttributes(component.model.id, {
                  customAttributes: cartAttributes
                }).then(function(t) {
                  return component.model = t,
                  t
                })
              }
            }
          }
    
          function setQuantity(component, t, e) {
            var n = t.getAttribute("data-line-item-id");
            var a = component.model.lineItems.find(function(t) {
                return t.id === n
            });
            return component.props.tracker.trackMethod(component.updateItem.bind(component), "Update Cart", component.cartItemTrackingInfo(a, e))(n, e)
          }
          
          function currencyFormat(num) {
            return '¥' + parseInt(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          }
        })
      })();
      /*]]>*/