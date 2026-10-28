"use client";

import { ArrowUpRight, Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { trackAttrs } from "@/lib/analytics";
import { site } from "../../nokto/site";
import { Heading, Section, Text, cx } from "../../nokto/ui";
import { revealOnScroll } from "./motion";
import { shownReviews } from "./reviews";
import styles from "./HomeContent.module.css";

export function HomeReviews() {
  const reduce = useReducedMotion() ?? false;
  if (shownReviews.length === 0) return null;

  return (
    <Section id="reviews" padY="lg-tight" tone="background" relative isolate className={cx(styles.contentSection, styles.reviewsSection)} aria-labelledby="home-reviews-title">
      <motion.header {...revealOnScroll(reduce)} className={styles.sectionHeader}>
        <div className={styles.headerCopy}>
          <Text variant="label" tone="accent" className={styles.sectionLabel}><Quote aria-hidden size={15} /> 03 / Chuyện của hội mình</Text>
          <Heading as="h2" level="h1" id="home-reviews-title" className={styles.sectionTitle}>
            Ghé rồi <span className={cx(styles.titleSticker, styles.titleStickerCoral)}>kể lại.</span>
          </Heading>
          <Text tone="muted" measure="comfort" className={styles.headerDescription}>Trích nguyên văn từ các hội bạn từng ghé The Hot. Xem thêm các đánh giá khác trên Google Maps.</Text>
        </div>
      </motion.header>

      <ul className={styles.reviewsGrid}>
        {shownReviews.map((review, index) => (
          <motion.li key={`${review.author}-${review.month}`} {...revealOnScroll(reduce, index * 0.07, index % 2 === 0 ? -2 : 2)} className={styles.reviewItem}>
            <article className={styles.reviewCard}>
              <blockquote>{review.quote}</blockquote>
              <footer className={styles.reviewMeta}>
                <span className={styles.reviewStars} aria-label={`Đánh giá ${review.rating} trên 5 sao`}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
                <strong>{review.author}</strong>
                <span className={styles.reviewSource}>{review.source}</span>
                <time>Tháng {review.month}</time>
              </footer>
            </article>
          </motion.li>
        ))}
      </ul>

      <motion.a {...revealOnScroll(reduce, 0.18)} href={site.mapHref} target="_blank" rel="noreferrer" className={styles.textLink} {...trackAttrs("social_click", { network: "google_maps" })}>
        Xem thêm trên Google Maps <ArrowUpRight aria-hidden size={18} />
      </motion.a>
    </Section>
  );
}
