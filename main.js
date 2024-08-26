var app = new Vue({
							el: "#app",
							data() {
								return {
									ifshow: true,
									checked: false,
									radio: '1',
									activeSelect: '',
									selectOption: [{

									}],
									input: "",
									showOption: false,
									tabValue: "one",
								}
							},
							mounted() {
								this.setRect(360, 320);

								//设置不可拖动
								setWindowDrag(0, 0, 0, 0);

								var layout = function () {
									//window.orientation是设备握持方向, 不是屏幕显示方向
									if (window.lastorientation == window.orientation) return;
									window.lastorientation = window.orientation;

									//window.screen中的宽高不会随着屏幕旋转更新(只会在初始化的时候固定)
									if (Math.abs(window.orientation) == 90) {
										//横屏模式
										setWindowRect(0, 0, window.screen.height, window.screen.width);
									} else {
										//竖屏模式
										setWindowRect(0, 0, window.screen.width, window.screen.height);
									}
								}

								layout(); //设置旋转屏幕时自动调整布局和画布
								window.addEventListener("orientationchange", layout, false);

								setButtonAction(function () {
									var menu = document.querySelector("#app");
									if (menu.style.display == 'none') {
										menu.style.display = 'block';
										//显示菜单之后, 设置触控不可穿透悬浮窗口
										setWindowTouch(true);
									} else {
										menu.style.display = 'none';
										//隐藏菜单之后, 设置触控穿透悬浮窗口
										setWindowTouch(false);
									}
								});
							},

							methods: {
								setRect(w, h, x = -1, y = -1) {
									var boxW = w;
									var boxH = h;

									var ayMenu = this.$refs.menuMain;
									ayMenu.style.width = `${boxW}px`;
									ayMenu.style.height = `${boxH}px`;
									if (x == -1) ayMenu.style.left = `calc(50% - ${boxW / 2}px)`;
									if (y == -1) ayMenu.style.top = `calc(50% - ${boxH / 2}px)`;

									ayMenu.style.width = "400px";
									ayMenu.style.height = "240px";




									ayMenu.style.borderBottomLeftRadius = "10px";
									ayMenu.style.borderBottomRightRadius = "10px";
									ayMenu.style.borderTopLeftRadius = "10px";
									ayMenu.style.borderTopRightRadius = "10px";
								},
								titleTouchStart(event) {

									this.touchStartX = parseInt(event.touches[0].clientX);
									this.touchStartY = parseInt(event.touches[0].clientY);

									var ayMenu = this.$refs.menuMain;
									this.menuLastX = ayMenu.offsetLeft;
									this.menuLastY = ayMenu.offsetTop;
									document.ayimgui.style.height = '1px';
									document.container.style.height = '1px';
									document.aybody.style.height = '1px';
									document.aytab.style.height = '1px';

								},
								titleTouchMove(event) {
									event.preventDefault();
									var distanceX = event.touches[0].clientX - this.touchStartX;
									var distanceY = event.touches[0].clientY - this.touchStartY;

									var ayMenu = this.$refs.menuMain;
									ayMenu.style.left = this.menuLastX + distanceX + "px";
									ayMenu.style.top = this.menuLastY + distanceY + "px";
								},
								//切换导航栏
								changeTab(v) {
									this.tabValue = v;
								},
								closeimgui() {
									var menu = document.querySelector("#app");
									menu.style.display = 'none';
								}
							}
						});
