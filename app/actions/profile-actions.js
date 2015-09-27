
export const SET_PROFILE = 'profile@set';

export function setProfile(data) {
    return {
        type: SET_PROFILE,
        name: data.name,
        twitter: data.twitter,
        email: data.email,
        phone: data.phone,
        skype: data.skype,
        avatar: data.avatar,
        facebook: data.facebook
    };
}
