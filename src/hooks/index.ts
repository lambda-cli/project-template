import { useCallback } from 'react';
import { useNavigate, createSearchParams, useLocation, useSearchParams } from 'react-router-dom';

/**
 * 基于 React Router Hooks 的 URL 传参类工具函数
 * @returns {Object} 返回多个对象和方法
 */
export const useNav = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  /**
   * 通过 URL 传参的方式跳转到指定页面
   * @param {string} pathname - 指定页面
   * @param {Object} search - URL 传参
   */
  const toSearchParams = useCallback((pathname: string, search?: Record<string, any>) => {
    navigate({ pathname, search: createSearchParams(search).toString() });
  }, []);

  /**
   * 通过 State 传参的方式跳转到指定页面，适合对象和数组
   * @param {string} pathname - 指定页面
   * @param {Object} search - State 传参
   */
  const toStateParams = useCallback((pathname: string, search?: Record<string, any>) => {
    navigate(pathname, { state: search });
  }, []);

  return {
    /**
     * URL 传参
     * @type {Object}
     */
    search: searchParams,

    /**
     * State 传参
     * @type {Object}
     */
    state: location.state,

    /**
     * @type {Function}
     */
    toSearch: toSearchParams,

    /**
     * @type {Function}
     */
    toState: toStateParams,

    /**
     * useSearchParams 提供的 setSearchParams 方法，用来设置当前页面的 URL 参数
     * @type {Function}
     */
    setSearch: setSearchParams,
  };
};
