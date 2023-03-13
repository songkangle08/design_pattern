import React from "react";
import {
  Outlet,
  Link,
  useResolvedPath,
  useSearchParams,
  useOutletContext,
} from "react-router-dom";

const AboutChild = () => {
  const path = useResolvedPath("");
  console.log(path, "path");

  const [searchParams, setSearchParams] = useSearchParams();

  //
  const [count, setCount] = useOutletContext();

  return (
    <>
      <hr />
      <div>About--子组件 id={searchParams.get("id")}</div>
      <button onClick={() => setSearchParams({ id: 12345 })}>
        添加 useSearchParams 读取和设置url参数
      </button>

      <br />
      <br />
      <br />
      <br />
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        添加 useOutletContext 用于 路由之间共享状态
      </button>
    </>
  );
};

export default AboutChild;
