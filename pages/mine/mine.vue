<template>
	<view class="container">
		<view class="position-relative">
			<image class="bg" src="https://img-shop.qmimg.cn/s16/images/2020/01/20/9a82219bedcae5c2.jpeg"></image>
			<button class="code-btn" type="default" @click="memberCode">
				<image src="/static/images/mine/hym.png"></image>
				会员码
			</button>
		</view>
		<view style="padding: 0 30rpx;">
			<view class="user-box d-flex flex-column bg-white mb-30">
				<view class="d-flex align-items-center">
					<view class="avatar d-flex justify-content-center align-items-center bg-white position-relative">
						<image class="img" :src="isLogin ? member.avatar : '/static/images/mine/default.png'"></image>
					</view>
					<view class="progress flex-fill">
						<view class="font-size-lg font-weight-bold" @click="editUserInfo">{{ isLogin ? member.nickname : '请点击授权登录' }}</view>
						<view class="font-size-sm text-color-assist">当前成长值{{ member.alreadyProgress || 0 }}/{{ member.totalProgress || 0 }}</view>
						<view class="bar"></view>
					</view>
					<view class="member-btn bg-warning font-size-sm d-flex justify-content-center align-items-center">
						<view class="">会员权益</view>
						<view class="iconfont iconarrow-right"></view>
					</view>
				</view>
				<view class="w-100 d-flex">
					<view
						class="grid w-100 d-flex flex-column justify-content-center align-items-center"
						v-for="(user, idx) in userInfoList"
						style="padding: 30rpx;"
						@click="toUserPage(user)"
					>
						<view class="font-size-extra-lg text-color-base font-weight-bold mb-20">{{ user.value || '***' }}</view>
						<view class="font-size-sm text-color-assist">{{ user.name }}</view>
					</view>
				</view>
			</view>
			<view class="level-benefit-box bg-white mb-30">
				<view class="join d-flex justify-content-between font-size-base">
					<text class="text-color-base">新用户加入会员，享会员权益</text>
					<text class="text-color-primary" @click="login">立即加入</text>
				</view>
				<view class="d-flex justify-content-around" style="padding: 30rpx 0 20rpx;">
					<view
						class="grid d-flex flex-column align-items-center font-size-sm text-color-assist"
						v-for="(item, idx) in newLevelBenefitList"
						:key="idx"
						@click="toServicePage(item)"
					>
						<image class="icon mb-10" :src="item.iconSrc"></image>
						<text>{{ item.name }}</text>
					</view>
				</view>
			</view>
			<image class="banner mb-30" src="/static/images/mine/banner.png"></image>
		</view>
		<view class="service-box bg-white">
			<view class="font-size-lg text-color-base font-weight-bold mb-10">我的服务</view>
			<view class="d-flex flex-wrap justify-content-around" style="padding: 30rpx 0 20rpx;">
				<view class="grid d-flex flex-column align-items-center font-size-sm text-color-assist mb-40" v-for="(item, idx) in serviceList" :key="idx">
					<image class="icon mb-20" :src="item.iconSrc"></image>
					<text>{{ item.name }}</text>
				</view>
			</view>
		</view>
		<view class="text-align-center text-color-assist" style="padding: 30rpx 0; font-size: 22rpx;">会员卡适用于本小程序指定范围</view>
	</view>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
	data() {
		return {
			userInfoList: [{ name: '抵扣券', value: null }, { name: '积分商场', value: null }, { name: '余额', value: null }, { name: '礼品卡', value: null }],
			newLevelBenefitList: [
				{ name: '入会有礼', iconSrc: '/static/images/mine/rhyl.png' },
				{ name: '积分兑换', iconSrc: '/static/images/mine/jfdh.png' },
				{ name: '升级特权', iconSrc: '/static/images/mine/sjtq.png' },
				{ name: '生日特权', iconSrc: '/static/images/mine/srtq.png' },
				{ name: '奈雪宝藏', iconSrc: '/static/images/mine/nxbz.png' }
			],
			serviceList: [
				{ name: '积分签到', iconSrc: '/static/images/mine/jfqd.png' },
				{ name: '送她心愿', iconSrc: '/static/images/mine/stxy.png' },
				{ name: '奈雪商城', iconSrc: '/static/images/mine/nxsc.png' },
				{ name: '联系客服', iconSrc: '/static/images/mine/lxkf.png' },
				{ name: '我的订单', iconSrc: '/static/images/mine/wddd.png' },
				{ name: '我的资料', iconSrc: '/static/images/mine/wdzl.png' },
				{ name: '收货地址', iconSrc: '/static/images/mine/shdz.png' },
				{ name: '更多服务', iconSrc: '/static/images/mine/gdfw.png' }
			]
		};
	},
	computed: {
		...mapGetters(['isLogin']),
		...mapState(['member'])
	},
	methods: {
		memberCode() {
			if (!this.isLogin) {
				this.login();
				return;
			}
			uni.navigateTo({
				url: '/pages/mine/member-code'
			});
		},
		toUserPage(userConf) {
			debugger;
		},
		toServicePage(serviceConf) {
			debugger;
		},
		login() {
			uni.navigateTo({
				url: '/pages/login/login'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	.bg {
		width: 100%;
		height: calc(410 / 594 * 750rpx);
	}
	.code-btn {
		position: absolute;
		right: 40rpx;
		top: 40rpx;
		border-radius: 50rem;
		color: $color-primary;
		font-size: $font-size-sm;
		display: flex;
		align-items: center;
		justify-content: center;
		image {
			width: 30rpx;
			height: 30rpx;
			margin-right: 10rpx;
		}
	}
	.user-box {
		position: relative;
		margin-top: -175rpx;
		border-radius: 8rpx;
		box-shadow: $box-shadow;
		.avatar {
			width: 160rpx;
			height: 160rpx;
			margin: 0 35rpx;
			border-radius: 100%;
			margin-top: -35rpx;
			box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.2);
			.img {
				width: 140rpx;
				height: 140rpx;
				border-radius: 100%;
			}
		}
		.progress {
			margin-top: 20rpx;
		}
		.member-btn {
			margin-left: 35rpx;
			padding: 10rpx 0 10rpx 30rpx;
			border-radius: 50rem 0 0 50rem;
			color: #fff;
		}
	}
	.level-benefit-box {
		padding: 30rpx;
		border-radius: 8rpx;
		box-shadow: $box-shadow;
		.grid {
			.icon {
				width: 80rpx;
				height: 80rpx;
			}
		}
	}
	.banner {
		width: 100%;
		height: 160rpx;
	}
	.service-box {
		padding: 32rpx 30rpx 10rpx;
		.grid {
			width: 25%;
			.icon {
				width: 80rpx;
				height: 80rpx;
			}
		}
	}
}
</style>
