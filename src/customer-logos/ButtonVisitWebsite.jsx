import styles from '../styles/styles.module.css'

const VisitImg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='17'
    viewBox='0 0 16 17'
    fill='none'>
    <path
      d='M8.80004 2.73547C8.58787 2.73547 8.38438 2.81976 8.23436 2.96979C8.08433 3.11982 8.00004 3.3233 8.00004 3.53547C8.00004 3.74765 8.08433 3.95113 8.23436 4.10116C8.38438 4.25119 8.58787 4.33547 8.80004 4.33547H10.8688L5.83444 9.36987C5.75803 9.44367 5.69709 9.53195 5.65516 9.62955C5.61323 9.72715 5.59116 9.83213 5.59024 9.93835C5.58932 10.0446 5.60956 10.1499 5.64978 10.2482C5.69001 10.3466 5.74941 10.4359 5.82452 10.511C5.89964 10.5861 5.98896 10.6455 6.08728 10.6857C6.18559 10.726 6.29094 10.7462 6.39716 10.7453C6.50339 10.7444 6.60836 10.7223 6.70596 10.6804C6.80357 10.6384 6.89184 10.5775 6.96564 10.5011L12 5.46667V7.53547C12 7.74765 12.0843 7.95113 12.2344 8.10116C12.3844 8.25119 12.5879 8.33547 12.8 8.33547C13.0122 8.33547 13.2157 8.25119 13.3657 8.10116C13.5158 7.95113 13.6 7.74765 13.6 7.53547V3.53547C13.6 3.3233 13.5158 3.11982 13.3657 2.96979C13.2157 2.81976 13.0122 2.73547 12.8 2.73547H8.80004Z'
      fill='#9CA3AF'
    />
    <path
      d='M4.00002 4.33545C3.57568 4.33545 3.16871 4.50402 2.86865 4.80408C2.5686 5.10414 2.40002 5.5111 2.40002 5.93545V12.3354C2.40002 12.7598 2.5686 13.1668 2.86865 13.4668C3.16871 13.7669 3.57568 13.9354 4.00002 13.9354H10.4C10.8244 13.9354 11.2313 13.7669 11.5314 13.4668C11.8315 13.1668 12 12.7598 12 12.3354V9.93545C12 9.72328 11.9157 9.51979 11.7657 9.36976C11.6157 9.21974 11.4122 9.13545 11.2 9.13545C10.9879 9.13545 10.7844 9.21974 10.6343 9.36976C10.4843 9.51979 10.4 9.72328 10.4 9.93545V12.3354H4.00002V5.93545H6.40002C6.6122 5.93545 6.81568 5.85116 6.96571 5.70113C7.11574 5.55111 7.20002 5.34762 7.20002 5.13545C7.20002 4.92328 7.11574 4.71979 6.96571 4.56976C6.81568 4.41973 6.6122 4.33545 6.40002 4.33545H4.00002Z'
      fill='#9CA3AF'
    />
  </svg>
)
const VisitWebsiteButton = () => {
  return (
    <button className={styles.buttonVisitWww}>Visit Website {VisitImg}</button>
  )
}
export default VisitWebsiteButton
