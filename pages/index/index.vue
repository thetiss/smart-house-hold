<template>
	<view class="container">
		<view class="header">
			<image class="bg" src="https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg"></image>
			<view class="intro d-flex flex-column">
				<view class="font-size-lg text-color-white mb-10">您好，{{ isLogin ? member.nickname : '游客' }}</view>
				<view class="font-size-sm text-color-white">一份物品，由仓管理开启您的家居物品管理</view>
			</view>
		</view>
		<view class="content">
			<view class="take-in-out d-flex mb-30">
				<view class="item d-flex flex-column justify-content-center align-items-center">
					<image class="icon" src="/static/images/index/zq.png"></image>
					<text class="title">存入</text>
				</view>
				<view class="item d-flex flex-column justify-content-center align-items-center">
					<image class="icon" src="/static/images/index/wm.png"></image>
					<text class="title">取出</text>
				</view>
			</view>
			<view class="integral d-flex align-items-center mb-30">
				<view class="integral-section flex-fill">
					<view class="d-flex align-items-center">
						<text class="font-size-base text-color-base" style="margin-right: 10rpx;">我的积分</text>
						<text class="bold">{{ userIntegral || 411 }}</text>
					</view>
					<view class="d-flex align-items-center">
						<view class="font-size-sm text-color-assist">进入积分商城兑换券及周边好礼</view>
						<view class="iconfont iconarrow-right"></view>
					</view>
				</view>
				<view class="qrcode-section d-flex flex-column align-items-center" @click="memberCode">
					<image class="img mb-10" src="/static/images/index/qrcode.png"></image>
					<text class="font-size-sm text-color-primary">会员码</text>
				</view>
			</view>
			<view class="activities mb-20">
				<view class="left">
					<view class="grid">
						<view class="d-flex align-items-center">
							<image class="mark-img" src="/static/images/index/csc.png"></image>
							<text class="font-size-sm text-color-base">仓管理小商城</text>
						</view>
						<view class="tooltip text-color-assist">海量优质好我，网红公仔</view>
					</view>
					<view class="grid"><image class="shop-img" src="/static/images/index/yzclh.png" mode="heightFix"></image></view>
				</view>
				<view class="right d-flex flex-column font-size-sm text-color-base">
					<view class="tea-activity mb-20">
						<image class="icon" src="/static/images/index/mcsb.png"></image>
						<text>买茶送包</text>
						<view class="right-img"><image src="/static/images/index/mcsb_bg.png" mode="widthFix"></image></view>
					</view>
					<view class="member-coupon">
						<image class="icon" src="/static/images/index/hyjb.png"></image>
						<text>会员券包</text>
						<view class="right-img"><image src="/static/images/index/hyjb_bg.png" mode="widthFix"></image></view>
					</view>
				</view>
			</view>
			<view class="member mb-30">
				<view class="title d-flex justify-content-between align-items-center">
					<view class="font-size-lg font-weight-bold">会员新鲜事</view>
					<view class="iconfont iconRightbutton text-color-assist" style="font-size: 52rpx;"></view>
				</view>
				<view class="list">
					<view class="item" v-for="(item, idx) in memberStoryList" :key="idx">
						<image class="bg-img" :src="item.imgSrc"></image>
						<text class="item-title">{{ item.title }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
	data() {
		return {
			memberStoryList: [{ imgSrc: 'https://img-shop.qmimg.cn/s23107/2020/04/27/0039bf41c9ebd50a2c.jpg', title: '"梅"你不行 | 霸气杨梅清爽回归' }]
		};
	},
	computed: {
		...mapGetters(['isLogin']),
		...mapState(['member'])
	},
	onShow() {},
	methods: {
		memberCode() {
			if (!this.isLogin) {
				uni.navigateTo({
					url: '/pages/login/login'
				});
				return;
			}
			uni.navigateTo({
				url: '/pages/mine/member-code'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.container {
	background-color: $bg-color;
	.header {
		position: relative;
		width: 100%;
		height: 600rpx;
		.bg {
			width: 100%;
			height: 600rpx;
			position: absolute;
			top: 0;
		}
		.intro {
			position: absolute;
			left: 40rpx;
			top: calc(50rpx + var(--status-bar-height));
		}
	}
	.content {
		position: relative;
		padding: 0 30rpx;
		.take-in-out {
			padding: 30rpx 0;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: box-shadow;
			position: relative;
			margin-top: -80rpx;
			.item {
				width: 49%;
				position: relative;
				.icon {
					width: 84rpx;
					height: 84rpx;
					margin: 20rpx;
				}
				.title {
					font-size: 30rpx;
					color: $text-color-base;
					font-weight: 600;
				}
				&.item:nth-child(1)::after {
					content: '';
					width: 1rpx;
					height: 100%;
					background-color: #ddd;
					position: absolute;
					right: 0;
					transform: scaleX(0.5) scaleY(0.8);
				}
			}
		}
		.integral {
			padding: 30rpx;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: box-shadow;
			.integral-section {
				.bold {
					font-size: 44rpx;
					font-weight: 700;
				}
			}
			.qrcode-section {
				.img {
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
		.activities {
			padding: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: box-shadow;
			display: flex;
			align-items: stretch;
			.left {
				width: 340rpx;
				padding: 0 20rpx;
				margin-right: 20rpx;
				background-color: $bg-color-primary;
				.grid:nth-last-child(1) {
					align-items: flex-end;
				}
				.grid {
					height: 50%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					.tooltip {
						font-size: 10px;
						margin-left: 40rpx;
					}
					.mark-img {
						width: 30rpx;
						height: 30rpx;
						margin-right: 10rpx;
					}
					.shop-img {
						height: 123rpx;
					}
				}
			}
			.right {
				width: 290rpx;
				.right-img {
					flex: 1;
					position: relative;
					margin-left: 20rpx;
					margin-right: -20rpx;
					margin-bottom: -20rpx;
					display: flex;
					align-items: flex-end;
					image {
						width: 100%;
					}
				}
				.icon {
					width: 30rpx;
					height: 30rpx;
					margin-right: 10rpx;
				}
				.tea-activity {
					padding: 20rpx;
					display: flex;
					align-items: center;
					position: relative;
					background-color: #fdf3f2;
				}
				.member-coupon {
					padding: 20rpx;
					display: flex;
					align-items: center;
					position: relative;
					background-color: #fcf6d4;
				}
			}
		}
		.member {
			.title {
				padding: 20rpx 0;
			}
			.list {
				width: 100%;
				display: flex;
				flex-direction: column;
				.item {
					width: 100%;
					height: 240rpx;
					.bg-img {
						width: 100%;
						height: 100%;
						border-radius: 8rpx;
					}
					.item-title {
						font-size: $font-size-lg;
						color: #fff;
						position: relative;
						top: -70rpx;
						left: 10rpx;
					}
				}
			}
		}
	}
}
</style>
