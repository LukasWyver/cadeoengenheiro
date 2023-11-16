import { z } from "zod";
import data from "../data.json";

export default function handler(req, res) {
  // Extrai e valida o parâmetro "slug" da query da URL
  const { slug } = z.object({ slug: z.string() }).parse(req.query);

  const post = data.posts.find(post => post.slug === slug);

  if (!post) {
    return NextResponse.error("Product not found.", { status: 400 });
  }

  res.status(200).json(post)
}
