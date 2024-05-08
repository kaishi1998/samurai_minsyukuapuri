consol.log(flatpickr);
let maxDate= new Date();
maxDate = maxDate.setMonth(maxDate.getMonth() + 3);　//選択できる日付の範囲

flatpickr('#fromCheckinDateToCheckoutDate', {
	model:"range",　   //カレンダー
	locale:"ja",　   　//言語
	minDate:'today',  //選べる日付の範囲　最小値
	maxDate: maxDate　 //最大値
});