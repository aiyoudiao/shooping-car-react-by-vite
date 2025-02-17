import { ProductDTO } from '../interface'

export interface Sort<T> {
  property: keyof T
  order: 'asc' | 'desc'
}

export interface PageRequest<T> {
  page?: number
  limit?: number
  sort?: Array<Sort<T>>
}

export interface ProductQuery {
  sizes?: string[]
}

export type ProductFilter = ProductQuery & PageRequest<ProductDTO>

/**
 * 获取产品数据
 * @param query - 产品查询参数
 * @param pageable - 分页请求参数
 * @returns 返回产品数据的 Promise
 */
export const getProducts = async (query?: ProductQuery, pageable?: PageRequest<ProductDTO>): Promise<ProductDTO[]> => {
  const url = `https://apifoxmock.com/m1/4719799-4372142-default/api/v1/products`

  try {
    // 构建查询字符串
    const params = new URLSearchParams()

    if (query?.sizes) {
      // query.sizes.forEach((size) => params.append('sizes', size));
      params.append('sizes', query.sizes.join(','))
    }
    if (pageable?.sort) {
      pageable.sort.forEach(sort => {
        params.append('sort', `${sort.property},${sort.order}`)
      })
    }

    // 发送 Fetch 请求
    const response = await fetch(`${url}?${params.toString()}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const products: ProductDTO[] = data.data.products || []
    // // 过滤产品数据
    // if (query?.sizes?.length) {
    //   products = products.filter((product) =>
    //     product.availableSizes.some((size) => query.sizes?.includes(size))
    //   );
    // }

    // 排序产品数据
    // if (pageable?.sort) {
    //   pageable.sort.forEach((sort) => {
    //     products.sort((a, b) => {
    //       const result = a[sort.property] >= b[sort.property] ? 1 : -1;
    //       return result * (sort.order === 'asc' ? 1 : -1);
    //     });
    //   });
    // }

    return products
  } catch (error) {
    console.error(`Error: ${error}`)
    return []
  }
}
