window.ganttSyncScroll = function () {
    const tasksScroll = document.getElementById('gantt-tasks-scroll');
    const timelineScroll = document.getElementById('gantt-timeline-scroll');
    const labelScroll = document.getElementById('gantt-label-scroll');
    if (!tasksScroll || !timelineScroll || !labelScroll) return;

    let isSyncing = false;

    tasksScroll.addEventListener('scroll', () => {
        if (isSyncing) return;
        isSyncing = true;
        timelineScroll.scrollLeft = tasksScroll.scrollLeft;
        labelScroll.scrollTop = tasksScroll.scrollTop;
        isSyncing = false;
    });
    timelineScroll.addEventListener('scroll', () => {
        if (isSyncing) return;
        isSyncing = true;
        tasksScroll.scrollLeft = timelineScroll.scrollLeft;
        isSyncing = false;
    });
    labelScroll.addEventListener('scroll', () => {
        if (isSyncing) return;
        isSyncing = true;
        tasksScroll.scrollTop = labelScroll.scrollTop;
        isSyncing = false;
    });
};

window.ganttSyncRowHeights = function () {
    const rows = document.querySelectorAll('.row-tasks');
    rows.forEach((row, i) => {
        const label = document.getElementById('row-label-' + i);
        if (label && row) {
            label.style.height = row.offsetHeight + 'px';
        }
    });
};
window.addEventListener('resize', () => window.ganttSyncRowHeights()); 