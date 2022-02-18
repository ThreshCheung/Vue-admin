import request from '@/utils/request'

// 获取列表接口
export const reqTradeMarkList = (page, limit) => request({ url: `/admin/product/baseTrademark/${page}/${limit}`, method: 'get' }) ///admin/product/baseTrademark/${page}/${limit}

// 新增
// 修改

export const reqAddOrUpdateTradeMark = (tradeMark) => {
    if (tradeMark.id) {
        return request({ url: `/admin/product/baseTrademark/update`, method: 'put', data: tradeMark })
    } else {
        return request({ url: `/admin/product/baseTrademark/save`, method: 'post', data: tradeMark })
    }
}

// DELETE

export const reqDeleteTradeMark = (id) =>request({url:`/admin/product/baseTrademark/remove/${id}`,method:'delete'})