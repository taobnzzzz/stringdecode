h5gg.require(7.9);
					var h5frida = h5gg.loadPlugin("h5frida", "h5frida-16.0.10.dylib");

					function ActiveCodePatch(fpath, vaddr, bytes) {
						if (!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
							var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);

						} return true;
					}
					function DeactiveCodePatch(fpath, vaddr, bytes) {
						return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
					}

					var codeStatus = false;

					//function ở đây còn gà lắm nếu cần anh dạy cho cả làm html cho jb ko cần vá :)))


					function Aim360() { // aim scope
						function searchAndReplace(searchValue,
							replaceValue,
							type) {
							h5gg.clearResults(); h5gg.searchNumber(searchValue,
								type,
								'0x100000000',
								'0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
									h5gg.setValue(results[i].address, replaceValue.toString(), type)
								}
						}
						searchAndReplace(0.09, 180, 'F32')
					}



					function Aim360() { // đạn thẳng
						function searchAndReplace(searchValue, replaceValue, type) {
							h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
								h5gg.setValue(results[i].address, replaceValue.toString(), type)
							}
						}
						searchAndReplace(1016018816, 180, 'I32')
					}



					function Aim360() { // aim 180
						function searchAndReplace(searchValue, replaceValue, type) {
							h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
								h5gg.setValue(results[i].address, replaceValue.toString(), type)
							}
						}
						searchAndReplace(1053273620, -2000, 'I32')
						searchAndReplace(1057048494, -2000, 'I32')
						searchAndReplace(1054951342, -2000, 'I32')

					}


					function Nhetam() { // xóa hoạt ảnh //
						function searchAndReplace(searchValue, replaceValue, type) {
							h5gg.clearResults();
							h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
							var results = h5gg.getResults(h5gg.getResultsCount());
							for (var i = 0; i < results.length && i < 10; i++) {
								h5gg.setValue(results[i].address, replaceValue.toString(), type);
							}
						}
						searchAndReplace(3145840, 49, 'I32');
					}



					function Aim360() { // lock scope
						h5gg.clearResults();
						h5gg.searchNumber('1075000115', 'I32', '0x100000000', '0x160000000');
						h5gg.editAll('-5', 'I32');
						h5gg.clearResults();
						h5gg.searchNearby('3', 'I32', '0x100');
						h5gg.editAll('-5', 'I32');
						h5gg.clearResults();
						h5gg.searchNumber('1075000115', 'I32', '0x100000000', '0x160000000');
						h5gg.editAll('-5', 'I32');
						h5gg.clearResults();

					}










					function HeadshotCu() {
						function searchAndReplace(searchValue, replaceValue, type) {
							h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x200000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
								h5gg.setValue(results[i].address, replaceValue.toString(), type)
							}
						}
						searchAndReplace(2018908708, 96688289, 'I32')
					}


					function Aim360() { // aim scope v2
						function searchAndReplace(searchValue,
							replaceValue,
							type) {
							h5gg.clearResults(); h5gg.searchNumber(searchValue,
								type,
								'0x100000000',
								'0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
									h5gg.setValue(results[i].address, replaceValue.toString(), type)
								}
						}
						searchAndReplace(1075000115, -5, 'F32')
					}



					function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
						h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result => {
							if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
								h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++;
							}
						}); if (modifiedCount > 0) {
							if (alertMessage) alert(alertMessage)
						} else if (alertMessage) {
							alert("Không tìm thấy kết quả phù hợp để thay đổi.")
						}
					}
					var Nhayman = 15;
					var nhayngam = 10;

					function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
						h5gg.clearResults();
						h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
						const results = h5gg.getResults(h5gg.getResultsCount());
						let modifiedCount = 0;

						results.forEach(result => {
							if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
								h5gg.setValue(result.address, replaceValue.toString(), 'F32');
								modifiedCount++;
								if (searchValue === Nhayman) Nhayman = replaceValue;
								if (searchValue === nhayngam) nhayngam = replaceValue;
							}
						});

						if (modifiedCount > 0 && alertMessage) {
							alert(alertMessage);
						} else if (alertMessage) {
							alert("Không tìm thấy kết quả phù hợp để thay đổi.");
						}
					}

					function buffnhay() {
						modifyValue1(nhayngam, Number(prompt("Nhập Độ nhạy màn hình :", "")), 'BB4', null, 'Đã thay đổi Độ nhạy màn hình');
						modifyValue1(Nhayman, Number(prompt("Nhập Độ nhạy kéo tâm :", "")), 'BAC', null, 'Đã thay đổi Độ nhạy kéo tâm');
					}
					function AimFor() { // aim for 180
						modifyValue(1077936128, -20000, 'A04');
						modifyValue(1069547520, 1148829696, 'A10')
					}








					function so01() { // tìm speed
						h5gg.clearResults();
						h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
						alert('搜索(' + h5gg.getResultsCount() + '/1)');
					}


					function so02() {
						h5gg.editAll('4397530849749489418', 'I64');
						({
							type: 'success',
							message: '10x'
						});
					}


					function so03() { // xóa speed
						h5gg.editAll('4397530849764387586', 'I64');
						({
							type: 'success',
							message: '還原'
						});
					}


					function so05() {
						h5gg.editAll('4397530849741637681', 'I64');
						({
							type: 'success',
							message: '50x'
						});
					}




					function so90() { // ăng teng vai
						h5gg.clearResults();
						h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
						h5gg.editAll('4848124999925814228', 'I64');
						h5gg.clearResults();
						h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
						h5gg.editAll('4848124999925251973', 'I64');
						h5gg.clearResults();
						h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
						h5gg.editAll('4848125002066881600', 'I64');
						({
							type: 'success',
							message: '肩膀天線'
						});


					}




					function s101s() { // đổi súng awm nhanh
						h5gg.clearResults();
						h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
						var count = h5gg.getResultsCount();
						var r = h5gg.getResults(count);
						var cnt = 0;
						for (var i = 0; i < count; i++) {
							var addr1 = r[i].address;

							var dizhi0 = (Number(addr1) + 36);
							var dizhi1 = (Number(addr1) + 40);



							{
								h5gg.setValue(dizhi0, 0.01, "F32");
								h5gg.setValue(dizhi1, 0.01, "F32");

							}
						}
					}


					function s101s() { // đổi súng nhanh
						h5gg.clearResults();
						h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
						h5gg.editAll('72340172821233664', 'I64');
					}










					function ZomCamxa() {
						modifyValue7(
							60, // Giá trị tìm kiếm ban đầu là 60
							Number(prompt("Nhập Tầm Xa Bắt Đầu Từ 60-> ... :", "")), // Giá trị thay thế do người dùng nhập vào
							'68', // Phần cuối của địa chỉ bộ nhớ cần khớp
							null, // Không cần địa chỉ kết thúc thứ hai
							"Giá Trị Đã Được Thay Đổi Và Khóa." // Thông báo khi thay đổi thành công và khóa giá trị
						);
					}

					function modifyValue7(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
						h5gg.clearResults();
						h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
						const results = h5gg.getResults(h5gg.getResultsCount());
						let modifiedCount = 0;

						// Tạo một danh sách để lưu trữ các địa chỉ cần khóa
						const lockAddresses = [];

						results.forEach(result => {
							if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
								h5gg.setValue(result.address, replaceValue.toString(), 'F32');
								modifiedCount++;
								lockAddresses.push(result.address); // Lưu địa chỉ cần khóa
							}
						});

						if (modifiedCount > 0 && alertMessage) {
							alert(alertMessage);

							// Khóa giá trị sau khi thay đổi
							const locker = setInterval(function () {
								console.log("Kiểm Tra Và Khóa Giá Trị...");
								lockAddresses.forEach(address => {
									const currentValue = h5gg.getValue(address, 'F32');
									if (currentValue !== replaceValue) { // Chỉ cập nhật nếu giá trị đã thay đổi
										h5gg.setValue(address, replaceValue.toString(), 'F32');
									}
								});
							}, 2000); // Kiểm tra và cập nhật mỗi 2 giây (giảm tần suất lặp)

							// Hủy bỏ khóa: clearInterval(locker); có thể gọi khi cần thiết
						} else if (alertMessage) {
							alert("Không Tìm Thấy Kết Quả Phù Hợp Để Thay Đổi.");
						}
					}



					function s100s() { // tâm awm
						h5gg.clearResults();
						h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
						var count = h5gg.getResultsCount();
						var r = h5gg.getResults(count);
						var cnt = 0;
						for (var i = 0; i < count; i++) {
							var addr1 = r[i].address;

							var dizhi0 = (Number(addr1) + 36);
							var dizhi1 = (Number(addr1) + 40);
							var dizhi2 = (Number(addr1) + -308);



							{
								h5gg.setValue(dizhi0, 0.01, "F32");
								h5gg.setValue(dizhi1, 0.01, "F32");
								h5gg.setValue(dizhi2, 0, "I32");

							}
						}
					}



					function s105s() { // aim awm
						h5gg.clearResults();
						h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
						var count = h5gg.getResultsCount();
						var r = h5gg.getResults(count);
						var cnt = 0;
						for (var i = 0; i < count; i++) {
							var addr1 = r[i].address;

							var dizhi0 = (Number(addr1) + 8);




							{
								h5gg.setValue(dizhi0, 2139095040, "I32");

							}
						}
					}
