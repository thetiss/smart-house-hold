<template>
	<view class="container">
		<view class="intro d-flex flex-column">
			<image class="logo" src="/static/images/logo.png"></image>
			<view class="slogan font-size-base text-color-assist">
				多一份整理，近一点极简生活
				<view class="br"></view>
				极简管理，舒适生活
				<!-- 				<view>多一份整理，近一点极简生活</view>
				<view>极简管理，舒适生活</view> -->
			</view>
		</view>
		<view class="bottom d-flex flex-column">
			<button
				:loading="loginBtnLoading"
				:disabled="loginBtnDisable"
				type="primary"
				open-type="getUserInfo"
				@getuserinfo="getUserInfo"
				class="login-btn d-flex justify-content-center align-items-center"
			>
				<image class="wx-logo" src="/static/images/mine/wechat.png"></image>
				微信一键登录
			</button>
			<view class="description d-flex flex-column align-items-center font-size-base">
				<view class="text-color-assist">新用户登录即加入会员，享会员权益</view>
				<view class="w-100 priority-list d-flex align-items-center">
					<view class="grid d-flex flex-column align-items-center" v-for="(item, idx) in memberPriority" :key="idx">
						<image :src="item.iconSrc" class="img mb-10"></image>
						<text class="font-size-sm text-color-assist">{{ item.name }}</text>
					</view>
				</view>
				<view class="text-color-primary">会员权益说明</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			loginBtnLoading: false,
			memberPriority: [
				{ iconSrc: '/static/images/mine/rhyl.png', name: '入会有礼' },
				{ iconSrc: '/static/images/mine/jfdh.png', name: '积分兑换' },
				{ iconSrc: '/static/images/mine/sjtq.png', name: '升级特权' },
				{ iconSrc: '/static/images/mine/srtq.png', name: '生日特权' },
				{ iconSrc: '/static/images/mine/nxbz.png', name: '奈雪宝藏' }
			]
		};
	},
	computed: {
		...mapGetters(['isLogin']),
		loginBtnDisable() {
			return this.loginBtnLoading;
		}
	},
	onUnload() {
		this.loginBtnLoading = false;
	},
	methods: {
		...mapMutations(['SET_MEMBER']),
		getUserInfo(e) {
			this.loginBtnLoading = true;
			if (e.detail.errMsg !== 'getUserInfo:ok') return this.$msgError('微信授权失败');
			const { avatarUrl: avatar, nickName: nickname } = e.detail.userInfo;
			const member = Object.assign({}, { avatar, nickname });
			this.SET_MEMBER(member);
			this.$msgSuccess('登录成功', 2000);
			setTimeout(() => {
				this.loginBtnLoading = false;
				uni.navigateBack();
			}, 2500);
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	.intro {
		height: 60vh;
		align-items: center;
		justify-content: space-evenly;
		.logo {
			width: 165rpx;
			height: 165rpx;
		}
		.slogan {
			text-align: center;
			line-height: 72rpx;
		}
	}
	.bottom {
		height: 40vh;
		padding: 0 40rpx;
		justify-content: space-between;
		.login-btn {
			padding: 10rpx 0;
			border-radius: 50rem;
			.wx-logo {
				width: 36rpx;
				height: 30rpx;
				margin-right: 10rpx;
			}
		}
		.description {
			height: 30vh;
			justify-content: space-evenly;
			.priority-list {
				.grid {
					width: 20%;
					.img {
						width: 60rpx;
						height: 60rpx;
					}
				}
			}
		}
	}
}
</style>
