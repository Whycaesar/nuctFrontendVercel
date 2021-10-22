import Custom404 from "./404"

export default function Custom500() {
    return Custom404({desc="Server-side error occurred", error="505"});
  }