function formatNumber(n) {
    if (!isFinite(n)) {
        return n;
    }

    var s = ""+n, abs = Math.abs(n), _, i;

    if (abs >= 1000) {
        _  = (""+abs).split(/\./);
        i  = _[0].length % 3 || 3;

        _[0] = s.slice(0,i + (n < 0)) +
               _[0].slice(i).replace(/(\d{3})/g,',$1');

        s = _.join('.');
    }

    return s;
}

  $('.thousands').each(function() {
    $(this).html(formatNumber($(this).attr('data-max')))
  });
  
  
  //input value

  // document.getElementById('amount').addEventListener('keyup', function (e) {
  //   var value = String(this.value);
  //   var number = value.replace(/[^0-9]/g, '');
  
  //   if (number && needReplace(value)) {
  //     // Get new caret position
  //     var newCaretPosition = getNewCaretPosition(value, this.selectionStart);
  
  //     // change element's value
  //     this.value = parseFloat(number).toLocaleString();
  
  //     // Set caret position using setSelectionRange. Put start & end parameters equally.
  //     this.setSelectionRange(newCaretPosition, newCaretPosition);
  //   }
  // });
  
  // function needReplace(value) {
  //   return (value !== parseFloat(String(value).replace(/[^0-9]/g, '')).toLocaleString());
  // }
  
  // function getNewCaretPosition(value, caretPosition) {
  //   var number = String(value).replace(/[^0-9]/g, ''),
  //       needCommaCount = getCommaCount(parseFloat(number).toLocaleString()),
  //       currentCommaCount = getCommaCount(value),
  //       newCaretPosition = caretPosition;
  
  //   // All new comma will be inserted left of caret.
  //   // So, if comma count to need is greater than current comma count then add 1 to new caret position.
  //   if (needCommaCount > currentCommaCount) {
  //     newCaretPosition = caretPosition + 1;
  //   }
  
  //   return newCaretPosition;
  // }
  
  // function getCommaCount(value) {
  //   return value.replace(/[^,]/g, '').length;
  // }