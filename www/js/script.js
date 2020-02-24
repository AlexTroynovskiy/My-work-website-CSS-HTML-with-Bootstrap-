$(document).ready(function () {
  $('.contactForm').on('submit', function (e) {
    e.preventDefault();
    var form = $(this);
    var url = form.attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: form.serialize(),
      success: function (data) {
        form.html('<div class="text-center"><h3>Спасибо! Мы свяжемся с вами в ближайшее время.</h3>');
      },
      error: function (data) {
        form.html('<div class="text-center"><h3 class="text-danger">Произошла ошибка при отправке заявки. Обновите страницу</h3>');
      }
    });
    return false;
  });
  $('.contactOrderForm').on('submit', function (e) {
    e.preventDefault();
    var form = $(this);
    var url = form.attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: form.serialize(),
      success: function (data) {
        form.find('.modal-body').html('<div class="text-center"><h3>Спасибо! Мы свяжемся с вами в ближайшее время.</h3>');
      }
    });
    return false;
  });

  $('.orderForm.iPhone select[name="model"]').on('change', function () {
    var selected = $(this).find('option:selected');
    var form = $(this).closest('form');
    var title = $(selected).text();
    var price = $(selected).data('price');
    var name = 'iPhone ' + title;
    $(form).find('.title-text').text(name);
    $(form).find('input[name="name"]').val(name);
    $(form).find('input[name="price"]').val(price);
    $(form).find('strong.price').text('от ' + price + '  $.');
  });
  $('.orderForm.mac select[name="model"]').on('change', function () {
    var selected = $(this).find('option:selected');
    var form = $(this).closest('form');
    var title = $(selected).text();
    var price = $(selected).data('price');
    var name = 'MacBook ' + title;
    $(form).find('.title-text').text(name);
    $(form).find('input[name="name"]').val(name);
    $(form).find('input[name="price"]').val(price);
    $(form).find('strong.price').text('от ' + price + ' $.');
  });
  $('.orderForm.ipad select[name="model"]').on('change', function () {
    var selected = $(this).find('option:selected');
    var form = $(this).closest('form');
    var title = $(selected).text();
    var price = $(selected).data('price');
    var name = 'iPad ' + title;
    $(form).find('.title-text').text(name);
    $(form).find('input[name="name"]').val(name);
    $(form).find('input[name="price"]').val(price);
    $(form).find('strong.price').text('от ' + price + ' $.');
  });
  $('.orderForm').on('submit', function (e) {
    e.preventDefault();
    var name = $(this).find('input[name="name"]').val();
    var price = $(this).find('input[name="price"]').val();
    var color = $(this).find('select[name="color"]').val();
    if (color !== undefined) {
      var order = name + ' ( ' + color + ' )';
    }
    else {
      var order = name;
    }
    $('#orderModal .modal-title').text('Заказать ' + order);
    $('#orderModal input[name="order"]').val(order);
    if (price !== undefined) {
      $('#orderModal .price').text('Цена от ' + price + ' $.');
    }
    $('#orderModal').modal('show');
    return false;
  });
});
