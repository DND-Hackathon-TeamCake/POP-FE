import React from "react";
import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.types";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      {/* <Header /> */}
      <div className={styles.children}>{children}</div>
    </div>
  );
}
